const projectListReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_PROJECT_LIST':
            return state = action.targetProjectList;
        default:
            return state;
    }
};

export default projectListReducer;