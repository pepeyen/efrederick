import {combineReducers} from 'redux';

//Reducers
import languageReducer from './languageReducer';
import projectListReducer from './projectListReducer';

const allReducers = combineReducers({
    pageLanguage: languageReducer,
    projectList: projectListReducer
});

export default allReducers;