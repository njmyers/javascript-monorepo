import { constants } from './facebook-actions';

const blankFacebookState = {
  loggedIn: false,
  accessToken: '',
  expiresIn: '',
  signedRequest: '',
  userID: '',
};

export default function facebookUIReducer(state = blankFacebookState, action) {
  switch (action.type) {
    case constants.FB_LOGIN_SUCCESS:
    case constants.FB_LOGIN_ERROR:
      return Object.assign({}, state, {
        [action.key]: action.value,
      });
    case constants.FB_SAVE_SESSION:
      return Object.assign({}, state, action.payload, {
        loggedIn: true,
      });
    case constants.FB_LOGIN:
    default:
      return state;
  }
}
