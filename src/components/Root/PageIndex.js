import React from 'react';

/*
	Use AsyncLoader for sweet page based code splitting
*/

const NotFound = AsyncLoader(() => import('../NotFound'));

const PageIndex = [
	{
		slug: '*',
		component: NotFound,
	},
];

export default PageIndex;
