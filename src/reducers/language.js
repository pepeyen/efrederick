const languageReducer = (state = "en_US", action) => {
    switch(action.type){
        case 'SET_EN-US':
            return state = "en_US";
        case 'SET_PT-BR':
            return state = "pt_BR";
        default:
            return state;
    }
};

export default languageReducer;