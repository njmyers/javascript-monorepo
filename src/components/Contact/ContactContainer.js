import { connect } from 'react-redux';
import ContactComponent from './ContactComponent';
import { updateContactForm, submitContactForm } from './contact-actions';

const mapStateToProps = (state, ownProps) => {
    return {
        UI: state.UI,
        contact: state.contact,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (event) => dispatch(updateContactForm(event.target.value, event.target.name)),
        onSubmit: (event) => {
            event.preventDefault();
            dispatch(submitContactForm());
        },
    };
};

const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactComponent);

export default Contact;
