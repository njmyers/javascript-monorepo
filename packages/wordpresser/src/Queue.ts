export type Resolve<T> = (value?: T | PromiseLike<T>) => void;
export type Reject = (reason?: unknown) => void;
export type Job<T> = () => Promise<T>;

/**
 * Create a queue class to run promises in parallel. Similar to Promise.all but
 * manages concurrency.
 */
class Queue<T> {
  concurrency: number;
  running: number;
  length: number;
  jobs: Job<T>[];
  responses: T[];
  promise: Promise<T[]>;
  resolve?: Resolve<T[]>;
  reject?: Reject;

  constructor({ concurrency = 1 } = {}) {
    this.concurrency = concurrency;
    this.jobs = [];
    this.responses = [];
    this.running = 0;
    this.length = 0;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  private get next(): [number, Job<T> | undefined] {
    const position = this.jobs.length - 1;

    if (position > -1) {
      return [position, this.jobs.shift()];
    }

    return [position, undefined];
  }

  private getThen(position: number) {
    return (response: T): void => {
      this.running -= 1;
      this.responses[position] = response;
      this.run(...this.next);
    };
  }

  private getCatch() {
    return (error: Error): void => {
      if (error && typeof this.reject === 'function') {
        this.reject(error);
      }
    };
  }

  private getFinally() {
    return (): void => {
      if (this.running === 0 && typeof this.resolve === 'function') {
        this.resolve(this.responses);
      }
    };
  }

  private run(position: number, job?: Job<T>): void {
    if (!job) {
      return;
    }

    this.running += 1;

    job()
      .then(this.getThen(position))
      .catch(this.getCatch())
      .finally(this.getFinally());
  }

  /**
   * Add a function to the processing queue.
   */
  add(...jobs: Job<T>[]): void {
    this.jobs.push(...jobs);
    this.length += jobs.length;
  }

  /**
   * Start processing all the functions added to the processing queue.
   */
  process(): Promise<T[]> {
    for (let current = 0; current < this.concurrency; current += 1) {
      this.run(...this.next);
    }

    return this.promise;
  }
}

export default Queue;
