import React from 'react';
import {Route,Link, BrowserRouter as Router} from "react-router-dom";
import ReactBurger from "./delicacy/ReactBurger"
import FlutterNoodle from "./delicacy/FlutterNoodle"
import VueIcecream from "./delicacy/VueIcecream"

const Delicacy = () => { 
    return ( 
        <Router>
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/delicay/reactburger">ReactBurger</Link></li>
                        <li><Link to="/delicay/flutternoodle">FlutterNoodle</Link></li>
                        <li><Link to="/delicay/vueicecream">VueIcecream</Link></li>
                    </ul>
                </div>  
                <div className="delicacyContent">
                    <div><h3>Delicacy....</h3></div>
                    <Route path="/delicay/reactburger/" component={ReactBurger}/>
                    <Route path="/delicay/flutternoodle/" component={FlutterNoodle}/>
                    <Route path="/delicay/vueicecream/" component={VueIcecream}/>
                </div> 
            </div> 
        </Router>
      
    );
}
 
export default Delicacy;