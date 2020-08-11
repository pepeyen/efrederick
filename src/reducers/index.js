import languageReducer from './language';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    pageLanguage: languageReducer
});

export default allReducers;