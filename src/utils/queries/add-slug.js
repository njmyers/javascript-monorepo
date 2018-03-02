const addSlug = (slug) => (query) => (query ? `/${slug}${query}` : `/${slug}`);

export default addSlug;
