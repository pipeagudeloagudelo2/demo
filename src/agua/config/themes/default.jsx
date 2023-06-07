const initialState = {
    bodyColor: "E8F1FF",

};

export default (state = initialState, action) => {
    
if (action.type === 'Default_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}


    return state;
};
            