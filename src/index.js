import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import WebFont from './fonts';

import { postsRequest } from './utils/wp';

const reload = () => window.reload();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/robots.txt" onEnter={reload} />
				<Route path="/sitemap.xml" onEnter={reload} />
				<Root />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

store.dispatch(postsRequest('shows')({ page: 1 }));
// store.dispatch(postsRequest('shows')({ page: 2 }));
store.dispatch(postsRequest('shows')({ id: 15463 }));
