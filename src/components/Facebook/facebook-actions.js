/* global FB */

import generateActions from '../../utils/action-creator';

const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

const myActions = [
	{
		type: 'FB_API_LOADING',
	},
	{
		type: 'FB_API_LOADING_SUCCESS',
	},
	{
		type: 'FB_API_LOADING_ERROR',
	},
	{
		type: 'FB_LOGIN',
	},
	{
		type: 'FB_LOGIN_SUCCESS',
		key: 'loggedIn',
		value: true,
	},
	{
		type: 'FB_LOGIN_ERROR',
		key: 'loggedIn',
		value: false,
	},
	{
		type: 'FB_SAVE_SESSION',
	},
	{
		type: 'FB_GRAPH_CALL',
	},
	{
		type: 'FB_GRAPH_CALL_SUCCESS',
	},
	{
		type: 'FB_GRAPH_CALL_ERROR',
	},
];

const { constants, actions } = generateActions(myActions);

// promisify FB functions

function loadFBAPIAsync() {
	return new Promise((resolve, reject) => {
		window.fbAsyncInit = function() {
			FB.init({
				appId: appId,
				autoLogAppEvents: true,
				cookie: true, // enable cookies to allow the server to access the session
				xfbml: true, // parse social plugins on this page
				version: 'v2.10', // use version 2.10
			});
			resolve();
		};

		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = '//connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	});
}

function getLoginStatus() {
	return new Promise((resolve, reject) => {
		FB.getLoginStatus((response) => {
			if (response.status === 'connected') resolve(response.authResponse);
			else reject(false);
		});
	});
}

function login() {
	return new Promise((resolve, reject) => {
		FB.login((response) => {
			if (response.status === 'connected') resolve(response.authResponse);
			else reject(false);
		});
	});
}

function graph(path, method, params = {}) {
	return new Promise((resolve, reject) => {
		FB.api(path, method, params, (response) => {
			if (response) resolve(response);
			else reject(false);
		});
	});
}

// thunk FB creators
function thunkFBActionCreator({ promise, pre, post, success, error } = {}) {
	return () => {
		return (dispatch) => {
			if (pre) dispatch(pre());

			return promise()
				.then((data) => dispatch(success(data)))
				.then(() => {
					if (post) dispatch(post());
				})
				.catch((err) => dispatch(error(err)));
		};
	};
}

function makeGraphCall({ pre, success, error, post }) {
	return (params = {}, edge = 'feed', method = 'POST') => {
		return (dispatch, getState) => {
			const { userID, accessToken } = getState().facebook;
			const path = `/${userID}/${edge}`;

			if (pre) dispatch(pre());

			return graph(path, method, params)
				.then((data) => dispatch(success(data)))
				.then(() => {
					if (post) dispatch(post());
				})
				.catch((err) => dispatch(error(err)));
		};
	};
}

const postToFacebook = makeGraphCall({
	pre: actions.fbGraphCall,
	success: actions.fbGraphCallSuccess,
	error: actions.fbGraphCallError,
});

const FBLogin = thunkFBActionCreator({
	promise: getLoginStatus,
	pre: actions.fbLogin,
	success: actions.fbSaveSession,
	error: actions.fbLoginError,
});

const checkFacebookLoginStatus = thunkFBActionCreator({
	promise: getLoginStatus,
	pre: actions.fbLogin,
	success: actions.fbSaveSession,
	error: actions.fbLoginError,
});

const loadFacebookAPI = thunkFBActionCreator({
	promise: loadFBAPIAsync,
	pre: actions.fbApiLoading,
	success: actions.fbApiLoadingSuccess,
	error: actions.fbApiLoadingError,
	post: checkFacebookLoginStatus,
});

export { constants, actions, FBLogin, checkFacebookLoginStatus, loadFacebookAPI, postToFacebook };
