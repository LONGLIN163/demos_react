import React, { Component } from 'react';
//import {Link,Redirect} from "react-router-dom"
import {Link} from "react-router-dom"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123, title:"hahaha"},
                {cid:456, title:"xixixi"},
                {cid:789, title:"hehehe"}
            ]
        }
        this.props.history.push("/home/")
    }


    render() { 
        return (  
            <div>
                {/* <Redirect to="/home/"/> */}
                <ul>
                    {this.state.list.map((item,index)=>{ 
                        return <li key={item.cid+index}>
                            <Link 
                              to={"/list/"+item.cid} //**** */
                            >{item.title}</Link>
                        </li>
                    })}
                </ul>
            </div> 
        );
    }
}
 
export default Index;