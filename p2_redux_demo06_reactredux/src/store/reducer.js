const initialState = {
    inputvalue: "wocao",
    list:[
        "haha",
        "xixi" 
    ]
}; 

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "INPUT_CHANGE" :
            return {  
                    ...state,
                    inputvalue: action.value
            };
        case "ADD" :
            state.list.push(state.inputvalue)
            console.log(state)
            return {  
                    ...state,
                    inputvalue: ""
            };
        default:
            return state;
    }
};

export default reducer;