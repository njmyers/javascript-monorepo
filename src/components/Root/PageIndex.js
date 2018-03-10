import React from 'react';

import Test from '../Test';

import AsyncLoader from './AsyncLoader';
/*
	Use AsyncLoader for sweet page based code splitting
*/

const NotFound = AsyncLoader(() => import('../NotFound'));
const Contact = AsyncLoader(() => import('../Contact'));

const PageIndex = [
	{
		slug: 'contact',
		component: Contact,
		label: 'Contact',
	},
	{
		slug: 'test',
		component: Test,
		label: 'Test',
	},
	{
		slug: '*',
		component: NotFound,
	},
];

export default PageIndex;
