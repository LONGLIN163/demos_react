import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import Index from "./components/Index"
import Delicacy from "./components/Delicacy"
import Beauty from "./components/Beauty"
import  "./style.css"
  

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div className="mainDiv">
                   <div className="leftNav">
                       <h3>Today's Show</h3>
                       <ul>
                           <li><Link to="/">home</Link></li>
                           <li><Link to="/delicacy">Delicacy</Link></li>
                           <li><Link to="/beauty">Beauty</Link></li>
                       </ul> 
                   </div>
                   <div className="rightMain">
                       <Route path="/" exact component={Index}/>
                       <Route path="/delicacy/" component={Delicacy}/>
                       <Route path="/beauty/" component={Beauty}/>
                   </div>
                </div>
            </Router>
         );
    }
}
 
export default AppRouter;