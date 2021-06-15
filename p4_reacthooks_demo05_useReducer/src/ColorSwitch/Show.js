import React, { useContext } from "react";
import { ColorContext } from "./color"; // 

const Show = () => {
    const {color}=useContext(ColorContext);

    return (  
        <div style={{color:color}}>the font color is {color}</div>
    );
}
 
export default Show;


