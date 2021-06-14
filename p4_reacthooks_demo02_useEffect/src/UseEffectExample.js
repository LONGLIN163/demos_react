import React, { useState,useEffect } from 'react';

function UseEffectExample(){
    const [count, setCount]=useState(0);

    // one function can replace few lifecircle functions
    // userEffect is a asyn func. it would not affect the view update
    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times`)
    })
 
    return(
        <div>
            <p>click {count} times</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>add</button>
        </div>
    )
}
 
export default UseEffectExample;

