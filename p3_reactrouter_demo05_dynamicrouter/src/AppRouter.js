import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import Index from "./components/Index"
import Delicacy from "./components/Delicacy"
import Beauty from "./components/Beauty"
import  "./style.css"
  

const AppRouter = () => { 
    
    /**
     * Sent backend the format of this api,
     * receive real api, then create dynamic router.
     */
    let routerConfig=[
        {path:"/",title:"Home",exact:true,component:Index},
        {path:"/delicacy",title:"Delicacy",exact:false,component:Delicacy},
        {path:"/beauty",title:"Beauty",exact:false,component:Beauty}
    ]


    return ( 
        <Router>
            <div className="mainDiv">
            <div className="leftNav">
                <h3>Today's Show</h3>
                <ul>
                    {
                        routerConfig.map((item,index)=>{
                            return <li key={item+index}><Link to={item.path}>{item.title}</Link></li>
                        })
                    }
                </ul> 
            </div>
            <div className="rightMain">
                {
                    routerConfig.map((item,index)=>{
                        return <Route key={item+index} path={item.path} exact={item.exact} component={item.component} />
                    })
                }           
            </div>
            </div>
        </Router>
    );

}
 
export default AppRouter;