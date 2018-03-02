export const submitContactForm = () => ({ type: 'SUBMIT_CONTACT_FORM' });
export const updateContactForm = (payload, key) => ({ type: 'UPDATE_CONTACT_FORM', payload, key });
export const submitFormSucess = (payload) => ({ type: 'SUBMIT_CONTACT_FORM_SUCCESS', payload });
export const submitFormError = (payload) => ({ type: 'SUBMIT_CONTACT_FORM_ERROR', payload });
