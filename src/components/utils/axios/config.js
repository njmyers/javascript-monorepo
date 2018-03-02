import axios from 'axios';
import addDefaults from '../queries/add-defaults';

const apiURL = process.env.REACT_APP_WP_API_URL;
const baseURL = `${apiURL}/wp-json/wp/v2`;

const api = axios.create({
	baseURL,
});

export default api;
