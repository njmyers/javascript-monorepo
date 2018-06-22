const contactFields = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const messages = {
    status: '',
};

function contactReducer(state = { ...contactFields, ...messages }, action) {
    switch (action.type) {
        case 'SUBMIT_CONTACT_FORM':
            return { ...state, messages };
        case 'UPDATE_CONTACT_FORM':
            return { ...state, [action.key]: action.payload };
        case 'SUBMIT_CONTACT_FORM_SUCCESS':
            return { ...state, contactFields, status: action.payload };
        case 'SUBMIT_CONTACT_FORM_ERROR':
            return { ...state, status: action.payload };
        default:
            return state;
    }
}

export default contactReducer;
