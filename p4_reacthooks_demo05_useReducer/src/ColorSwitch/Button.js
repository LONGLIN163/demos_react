import React,{useContext} from 'react';
import { ColorContext, UPDATE_COLOR } from './color';

const Button = () => {
    const {dispatch}=useContext(ColorContext); //get dispatch from "ColorContext"
    return ( 
        <div>
            <button onClick={()=>{
                dispatch({
                    type:UPDATE_COLOR,
                    value:"red"
                }) 
            }}>red</button>
            <button onClick={()=>{
                dispatch({
                    type:UPDATE_COLOR,
                    value:"orange"
                }) 
            }}>orange</button>
            <button onClick={()=>{
                dispatch({
                    type:UPDATE_COLOR,
                    value:"haha"
                }) 
            }}>orange</button>
        </div>
     );
}
 
export default Button;