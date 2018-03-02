import 'babel-polyfill';
import react from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import { postsRequest, postsFilterUpdate } from './utils/wp';

store.dispatch(postsRequest('shows')({ page: 1 }));
store.dispatch(postsFilterUpdate(1, 'shows'));
