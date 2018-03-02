import axios from 'axios';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import log from '../log/log';

const mail = axios.create({
	baseURL: `${process.env.REACT_APP_MAIL_URL}/send`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: process.env.REACT_APP_MAIL_API_KEY,
	},
});

export default (recipient) => (data) => Observable.from(mail.post(`/${recipient}`, data));
