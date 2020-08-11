const languageReducer = (state = "en_us", action) => {
    switch(action.type){
        case 'SET_EN-US':
            return state = "en_us";
        case 'SET_PT-BR':
            return state = "pt_br";;
        default:
            return state;
    }
};

export default languageReducer;