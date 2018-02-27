import fetchPost from '../utils/post-mail';
import generateActions from '../utils/action-creator';

const successMessage = 'Successfully sent message';
const errorMessage = 'Error sending message. Please try again';

const myActions = [
	{
		type: 'UPDATE_CONTACT_FORM',
	},
	{
		type: 'SUBMIT_CONTACT_FORM',
	},
	{
		type: 'SUBMIT_CONTACT_FORM_SUCCESS',
		key: 'success',
		value: successMessage,
	},
	{
		type: 'SUBMIT_CONTACT_FORM_ERROR',
		key: 'error',
		value: errorMessage,
	},
	{
		type: 'CLEAR_CONTACT_FORM',
	},
	{
		type: 'UPDATE_CONTACT_FORM',
	},
];

const { constants, actions } = generateActions(myActions);
const { updateContactForm } = actions;

const postMail = fetchPost({
	pre: actions.submitContactForm,
	success: decodeResponse,
	error: actions.submitContactFormError,
});

function decodeResponse(json) {
	return (dispatch) => {
		if (json.status >= 200 && json.status < 300) {
			dispatch(actions.submitContactFormSuccess());
			dispatch(actions.clearContactForm());
		} else {
			dispatch(actions.submitContactFormError());
			if (process.env.NODE_ENV === 'development') console.log(json);
		}
	};
}

function sendMessage() {
	return (dispatch, getState) => {
		const { email, message, name, subject } = getState().contact;
		const body = JSON.stringify({
			name,
			email,
			message,
			subject,
		});

		dispatch(postMail('blatboy', body));
	};
}

export { updateContactForm, sendMessage, constants };
