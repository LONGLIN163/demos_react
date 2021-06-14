import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Index=()=>{
    useEffect(()=>{
        console.log(`useEffect=>Index mounted`)
        return ()=>{
            console.log(`useEffect=>Index unmounted`)
        }
    },[])// Array is empty means when this component is destroired, component unmounted .
    return <h2>Home</h2>
}
const List=()=>{
    useEffect(()=>{
        console.log(`useEffect=>List mounted`)
        return ()=>{
            console.log(`useEffect=>List unmounted`)
        }
    })
    return <h2>List</h2>
}

function App(){  
    const [count, setCount]=useState(0);

    useEffect(()=>{
        console.log(`useEffect=>U just click ${count} times`)
        return ()=>{
            console.log("============")
        }
    },[count])// when count change, component unmounted.
 
    return(
        <div>
            <p>click {count} times</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>add</button>
            <Router>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list" exact component={List}/>
            </Router>
        </div>
    )
}
 
export default App;
