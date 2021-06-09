/* eslint-disable import/no-anonymous-default-export */
import {CHANGE_INPUT,ADD,DEL} from "./actionTypes"
const defaultState = {
     inputvalue:"write something",
     list:[
         "learn react 8pam",
         "learn css hahaha",
         "work out outside..."
     ]
}
export default (state=defaultState,action)=>{
    //***we only can receive state, we can not change state,why????????***
    if (action.type===CHANGE_INPUT) {
        let newState=JSON.parse(JSON.stringify(state))//deep clone
        newState.inputvalue=action.value;
        return newState;// return to store, then store can use getState() to get this newState
    }
    if (action.type===ADD) {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputvalue);
        newState.inputvalue="";
        return newState;
    }
    if (action.type===DEL) {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState;
    }
    
    return state;
    
}