import {combineReducers} from 'redux';

//Reducers
import languageReducer from './languageReducer';

const allReducers = combineReducers({
    pageLanguage: languageReducer
});

export default allReducers;