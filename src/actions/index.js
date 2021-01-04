export const setLanguage = (targetLanguage) => {
    return {
        type: 'SET_LANGUAGE',
        targetLanguage: targetLanguage
    };
};

export const setProjectList = (targetProjectList) => {
    return {
        type: 'SET_PROJECT_LIST',
        targetProjectList: targetProjectList
    };
};