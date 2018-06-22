import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import mail from '../../utils/axios/mail';
import { submitFormError, submitFormSucess } from './contact-actions';

const successMessage = 'Successfully sent message';
const errorMessage = 'Error sending message. Please try again';

const body = (state) => {
    const { email, message, name, subject } = state.getState().contact;
    return { name, email, message, subject };
};

const mailEpic = (slug) => (action$, state) =>
    action$.ofType('SUBMIT_CONTACT_FORM').mergeMap((action) =>
        mail(slug)(body(state))
            .map((response) => {
                if (process.env.NODE_ENV !== 'production') console.log(response);
                return submitFormSucess(successMessage);
            })
            .catch((error) => {
                if (process.env.NODE_ENV !== 'production') console.log(error);
                return Observable.of(submitFormError(errorMessage));
            })
    );

export default mailEpic;
