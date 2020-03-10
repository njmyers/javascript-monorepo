import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import parse from 'parse-link-header';

import Queue from './Queue';

type MapOfInterface<T> = Map<keyof T, T[keyof T]>;

export interface RequestConfig extends AxiosRequestConfig {
  // configuration not part of axios
  recursive?: boolean;
  wpBase?: string;
}

export type PartialConfig = Partial<RequestConfig>;
export type PostResponse = AxiosResponse<Post[]>;

export interface Post {
  id: string;
  [key: string]: unknown;
}

export interface PostData {
  [id: string]: Post;
}

export interface PostFunctions {
  next?: () => Promise<PostResponse>;
  prev?: () => Promise<PostResponse>;
  currentPage?: number;
}

export type PostType = MapOfInterface<PostData>;
export type PostMethods = MapOfInterface<PostFunctions>;

export interface NormalizedData {
  [postType: string]: {
    [id: string]: Post;
  };
}

const REQUIRED_CONFIG_PARAMETERS: (keyof RequestConfig)[] = [
  'url',
  'method',
  'responseType',
];

const DEFAULTS: Partial<RequestConfig> = {
  method: 'GET',
  responseType: 'json',
};

class Wordpresser {
  static normalizeUrl(url: string): string {
    return url.startsWith('/') ? this.normalizeUrl(url.slice(1)) : url;
  }

  static getBaseUrl({ wpBase, baseURL }: PartialConfig = {}): string {
    if (!baseURL && !wpBase) {
      throw new Error('You  must supply a wpBase or baseUrl');
    }

    if (wpBase) {
      return `https://${this.normalizeUrl(wpBase)}/wp-json/wp/v2`;
    }

    return baseURL || '';
  }

  static getRequest(defaults: PartialConfig = {}) {
    return (url: string, config?: PartialConfig): Promise<PostResponse> => {
      const requestConfig = {
        ...defaults,
        ...config,
        url,
      };

      REQUIRED_CONFIG_PARAMETERS.forEach(param => {
        if (!(requestConfig && requestConfig[param])) {
          throw new Error(
            `You are missing the required parameter ${param} from your request`
          );
        }
      });

      return axios(requestConfig);
    };
  }

  request: (url: string, config?: AxiosRequestConfig) => Promise<PostResponse>;
  cache: Map<string, PostType>;
  methods: Map<string, PostMethods>;

  constructor({ wpBase, baseURL, ...options }: RequestConfig) {
    this.cache = new Map();
    this.methods = new Map();
    this.request = Wordpresser.getRequest({
      ...DEFAULTS,
      ...options,
      baseURL: Wordpresser.getBaseUrl({ wpBase, baseURL }),
    });
  }

  log(postType: string): void {
    const methods = this.getMethodsOfType(postType);
    const currentPage = methods.get('currentPage');
    const safePage = typeof currentPage === 'number' ? currentPage : 0;

    console.log(
      `=> Fetching page ${safePage + 1} of posts of type ${postType}`
    );
  }

  /**
   * Get the cache associated with a specific post type.
   */
  getCacheOfType(postType: string): PostType {
    const postCache = this.cache.get(postType) || new Map();

    if (!this.cache.has(postType)) {
      this.cache.set(postType, postCache);
    }

    return postCache;
  }

  /**
   * Get the methods associated with a specific post type.
   */
  getMethodsOfType(postType: string): PostMethods {
    const postMethods = this.methods.get(postType) || new Map();

    if (!this.methods.has(postType)) {
      this.methods.set(postType, postMethods);
    }

    return postMethods;
  }

  addDataToType(postType: string, ...posts: Post[]): void {
    const cache = this.getCacheOfType(postType);

    posts.forEach(post => {
      cache.set(post.id, post);
    });
  }

  addMethodsToType(postType: string, links: parse.Links): void {
    const methods = this.getMethodsOfType(postType);

    const next = links.next
      ? (): Promise<PostResponse> => this.getPost(links.next.url, postType)
      : undefined;

    const prev = links.prev
      ? (): Promise<PostResponse> => this.getPost(links.prev.url, postType)
      : undefined;

    methods.set('next', next);
    methods.set('prev', prev);

    const previousPage = methods.get('currentPage');

    if (typeof previousPage === 'number') {
      methods.set('currentPage', previousPage + 1);
    } else {
      methods.set('currentPage', 1);
    }
  }

  async getPost(url: string, postType: string): Promise<PostResponse> {
    this.log(postType);
    const response = await this.request(url);
    const { headers, data } = response;
    this.addDataToType(postType, ...data);
    // parse the headers for next/prev request functions
    const links = parse(headers.link);

    if (links && Object.keys(links).length > 0) {
      this.addMethodsToType(postType, links);
    }

    return response;
  }

  /**
   * Gets the next array of response for all postTypes
   */
  async getNext(config: PartialConfig = {}): Promise<AxiosResponse<Post[]>[]> {
    const jobs = new Queue<AxiosResponse<Post[]>>({ concurrency: 4 });

    this.methods.forEach(postType => {
      const next = postType.get('next');
      if (next && typeof next === 'function') {
        jobs.add(next);
      }
    });

    if (jobs.length < 1) {
      return [];
    }

    const responses = await jobs.process();

    if (config.recursive && Array.isArray(responses)) {
      return [...responses, ...(await this.getNext(config))];
    }

    return responses;
  }

  async getPostTypes(
    postType: string | string[],
    config: PartialConfig = {}
  ): Promise<PostResponse[]> {
    const postTypes = Array.isArray(postType) ? postType : [postType];
    const responses = await Promise.all<PostResponse>(
      postTypes.map(type => this.getPost(type, type))
    );

    if (config.recursive) {
      return [...responses, ...(await this.getNext(config))];
    }

    return responses;
  }

  /**
   * Return a normalized copy of all data that is currently in the cache. Arrays
   * will be represented as objects keyed by id.
   */
  getData(): NormalizedData {
    const normalized: NormalizedData = {};

    this.cache.forEach((posts, postType) => {
      posts.forEach((post, id) => {
        if (!normalized[postType]) {
          normalized[postType] = {};
        }

        normalized[postType][id] = post;
      });
    });

    return normalized;
  }

  /**
   * Return a JSON string of the normalized data that is currently in the cache.
   * This function contains the same signature as JSON.stringify starting from
   * the second argument
   */
  getJSON(replacer = null, space = 2): string {
    return JSON.stringify(this.getData(), replacer, space);
  }
}

export default Wordpresser;
