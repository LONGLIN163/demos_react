import React, { useState, createContext, useContext } from 'react';

const CountContext=createContext();

const Counter = () => {
    let count=useContext(CountContext)
    return ( 
        <h2>{count}</h2>
     );
}
 

function App(){  
    const [count, setCount]=useState(0);

    return(
        <div>
            <p>click {count} times</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>add</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}
 
export default App;
