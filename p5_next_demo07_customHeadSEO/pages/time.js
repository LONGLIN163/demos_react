import React, { useState } from 'react';
//import moment from "moment"
import dynamic from "next/dynamic"

const CustomCo = dynamic(import("../pages/CustomCo"))

const Time = () => {
    const [nowTime,setTime]=useState(Date.now())
    const changeTime = async () => { 
        const moment = await import("moment")// when we click button, we load moment module
        setTime(moment.default(Date.now()).format())
    }
     
    return ( 
        <>
         <div>the time is : {nowTime}</div>
        <CustomCo/>
         <div><button onClick={changeTime}>change time format</button></div>
        </>
     );
}
 
export default Time;