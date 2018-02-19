const WPActions = [
	{
		type: 'POSTS_REQUEST',
		key: 'status',
		value: 'loading',
	},
	{
		type: 'POSTS_RESOLVE',
		key: 'data',
	},
	{
		type: 'POSTS_SUCCESS',
		key: 'status',
		value: 'resolved',
	},
	{
		type: 'POSTS_ERROR',
		key: 'status',
		value: 'error',
	},
	{
		type: 'POSTS_TIMESTAMP',
		key: 'loadedAt',
	},
	{
		type: 'POSTS_TOTAL_PAGES',
		key: 'totalPages',
	},
	{
		type: 'POSTS_CURRENT_PAGE',
		key: 'currentPage',
	},
	{
		type: 'POSTS_FETCHED_PAGES',
		key: 'fetchedPages',
	},
	{
		type: 'POSTS_NEXT_PAGE',
		key: 'nextPage',
	},
	{
		type: 'POSTS_FILTER_UPDATE',
		key: 'filter',
	},
];

export default WPActions;
