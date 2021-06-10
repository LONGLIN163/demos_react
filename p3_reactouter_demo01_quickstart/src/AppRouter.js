import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index"
import List from "./Pages/List"

function AppRouter(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">
                        <Index></Index>
                    </Link>
                </li>
                <li>
                    <Link to="/List">
                        <List></List>
                    </Link>
                </li>
            </ul>
            <Route exact path="/" component={Index}/>
            <Route exact path="/List" component={List}/>
        </Router>
    )
}

export default AppRouter;