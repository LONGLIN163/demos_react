import React, { createContext, useReducer} from 'react';

//createContext return a container of data, but need to use Provider and value to pass data to sub components
export const ColorContext=createContext(); // for me, this just like store
//console.log(ColorContext)

export const UPDATE_COLOR="UPDATE_COLOR";

export const reducer = (state,action) => {
    console.log(state)
    console.log("action",action)

    switch (action.type) {
        case "UPDATE_COLOR":
            return action.value;
    
        default:
            return state;
    }
}



export const Color = (props) => {
    //console.log(props)// this is an array of components included in the instance of this componnets

    const [color,dispatch]=useReducer(reducer,"green");

    return ( 
        <ColorContext.Provider value={{color,dispatch}}>
            {/* this means all the sub component will share the same data(state) from this component */}
            {props.children} 
        </ColorContext.Provider>
     );
};
  
/****if we have more than one obj need to be exported, dont export default...**** */
