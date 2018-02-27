import { connect } from 'react-redux';
import ContactComponent from './ContactComponent';
import { updateContactForm, sendMessage } from './contact-actions';

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
			dispatch(sendMessage());
		},
	};
};

const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactComponent);

export default Contact;
