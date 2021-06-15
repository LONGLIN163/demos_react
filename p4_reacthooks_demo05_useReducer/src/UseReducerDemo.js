import React, { useReducer } from "react";

// this is useReducer in Hooks
const UseReducerDemo = () => {
    const [count, dispatch]= useReducer((state,action)=>{
        switch (action) {// here action diectly
            case "add":
                return state+1;
            case "sub":
                return state-1;
        
            default:
                return state;
        }

    },0)
    return (  
        <div>
            <h2>current number is {count}</h2>
            <button onClick={()=>{
                dispatch("add")// dispatch action directly. 
            }}>Increment</button>
            <button onClick={()=>{
                dispatch("sub")
            }}>Decrement</button>
        </div>
    );
}
 
export default UseReducerDemo;



// this is reducer in Redux
/* function countReducer(state,action){
  switch (action.type) {
      case "add":
          return state+1;
      case "sub":
          return state-1;
  
      default:
          return state;
  }
} */

