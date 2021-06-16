import React, { useState, useMemo} from 'react';

const ChildCompo = ({name,children}) => {
    const changeHaha=() => {
        console.log("haha is coming")
        return name+",haha is coming"
    }

    //const actionHaha=changeHaha(name);
    const actionHaha=useMemo(()=>{
        changeHaha(name)
    },[name]);// when name get changed, it will excute the function above

    return (  
        <>
            <div>{actionHaha}</div>
            <div>{children}</div>
        </>
    );
}
 
function App(){  
    const [haha, sethaha]=useState("haha is studying");
    const [xixi, setxixi]=useState("xixi is studying");

    return(
        <>
            <button onClick={()=>{sethaha(new Date().getTime())}}>haha</button>
            <button onClick={()=>{setxixi(new Date().getTime()+"xixi is coming")}}>xixi</button>
            <ChildCompo name={haha}>{xixi}</ChildCompo> 
        </>
    )
}
 
export default App;
