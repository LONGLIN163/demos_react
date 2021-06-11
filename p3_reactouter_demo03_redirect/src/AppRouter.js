import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index"
import List from "./Pages/List"
import Home from "./Pages/Home"

function AppRouter(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">index</Link>
                </li>
                <li>
                    <Link to="/list/123">list</Link>
                </li>
                <li>
                    <Link to="/home">home</Link>
                </li>
            </ul>
            <Route exact path="/" component={Index}/>
            <Route path="/list/:id" component={List}/>
            <Route path="/home" component={Home}/>
        </Router>
    )
}

export default AppRouter;