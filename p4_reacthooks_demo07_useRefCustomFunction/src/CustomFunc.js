import React, { useState, useEffect , useCallback } from 'react';

const useWindowSize = () => {
    const [size,setSize]=useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight

    })

    const onResize=useCallback(() => {
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(() => {
        // when the component updated(to dom)
        window.addEventListener("resize",onResize) 

        // when the component gets distroied, cancel listener, reduce memory waste.
        return (
           window.removeEventListener("resize",onResize,true)
        )
    },[])

    return size
}
 
const CustomFunc = () => {
    const size=useWindowSize();
    console.log(size)
    return ( 
        <>
            <div>width:{size.width} </div> 
            <div>height:{size.height}</div>
        </>
    );
}
 
export default CustomFunc;