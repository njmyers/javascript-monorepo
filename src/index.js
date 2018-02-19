import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import WebFont from './fonts';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Root />
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
