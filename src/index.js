import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import './fonts';

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
