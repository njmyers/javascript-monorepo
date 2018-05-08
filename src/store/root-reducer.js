import { combineReducers } from 'redux';
import { WPReducer } from '../utils/wp';
import contactReducer from '../components/Contact/contact-reducer';
import UIReducer from '../components/Root/ui-reducer';
import menuReducer from '../components/Header/menu-reducer';

const rootReducer = combineReducers({
    shows: WPReducer('shows'),
    contact: contactReducer,
    UI: UIReducer,
    menu: menuReducer,
});

export default rootReducer;
