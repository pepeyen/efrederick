const languageReducer = (state = "en_US", action) => {
    switch(action.type){
        case 'SET_LANGUAGE':
            return state = action.targetLanguage;
        default:
            return state;
    }
};

export default languageReducer;