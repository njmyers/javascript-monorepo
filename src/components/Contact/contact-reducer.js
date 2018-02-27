import { constants } from './contact-actions';

const contactFields = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const messages = {
	success: '',
	error: '',
};

const contactForm = Object.assign({}, contactFields, messages);

function contactReducer(state = contactForm, action) {
	switch (action.type) {
		case constants.UPDATE_CONTACT_FORM:
			return Object.assign({}, state, {
				[action.key]: action.payload,
			});
		case constants.SUBMIT_CONTACT_FORM_SUCCESS:
		case constants.SUBMIT_CONTACT_FORM_ERROR:
			return Object.assign({}, state, {
				[action.key]: action.value,
			});
		case constants.SUBMIT_CONTACT_FORM:
			return Object.assign({}, state, messages);
		case constants.CLEAR_CONTACT_FORM:
			return Object.assign({}, state, contactFields);
		default:
			return state;
	}
}

export default contactReducer;
