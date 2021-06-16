
import React, { useRef, useState, useEffect } from 'react';

const UseRefDemo = () => {
    const inputEl=useRef(null)// useref---- get dom elements

    const onBtnClick=()=>{
        //console.log(inputEl)
        inputEl.current.value="haha"
    }

    const [text,setText]=useState("wocao")
    const texRef=useRef()

    useEffect(()=>{
        console.log(texRef)
        texRef.current=text;
        console.log("texRef.current.value---"+texRef.current)// useref---- to keep value
    })

    return ( 
        <> 
          <input ref={inputEl} />
          <button onClick={onBtnClick}>show input here</button>
          <br />
          <input value={text} onChange={(e)=>{
             setText(e.target.value) 
          }}/>

        </>
     );
}
 
export default UseRefDemo;