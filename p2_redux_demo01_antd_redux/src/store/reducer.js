/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
     inputvalue:"write something",
     list:[
         "learn react 8pam",
         "learn css hahaha",
         "work out outside...  "
     ]
}
export default (state=defaultState,action)=>{
    //console.log(state,action)
    //we only can receive state, we can not change state,why????????
    if (action.type==="changeInput") {
        let newState=JSON.parse(JSON.stringify(state))//deep clone
        newState.inputvalue=action.value;
        return newState;
    }
    if (action.type==="add") {
        let newState=JSON.parse(JSON.stringify(state))//deep clone
        newState.list.push(newState.inputvalue);
        newState.inputvalue="";
        return newState;
    }
    if (action.type==="del") {
        let newState=JSON.parse(JSON.stringify(state))//deep clone
        newState.list.splice(action.index,1);
        return newState;
    }
    
    return state;
    
}