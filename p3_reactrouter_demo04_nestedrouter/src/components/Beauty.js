import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Dance from "./beauty/Dance"
import Sing from "./beauty/Sing"

const Beauty = () => {
    return ( 
        <Router>
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/dance">Dance</Link></li>
                        <li><Link to="/sing">Sing</Link></li>
                    </ul>
                </div>
                <div>
                    <div><h2>Beauty</h2></div>
                    <Route path="/dance" component={Dance} />
                    <Route path="/sing" component={Sing} />
                </div>

            </div>
        </Router>
     );
}
 
export default Beauty;