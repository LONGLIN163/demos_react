import React, { Component } from 'react';
import { Link } from 'dva/router';
import Haha from '../components/Haha';


class UserPage extends Component {
  handlerToIndex= () => {
    //console.log(this.props )
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        Userpage here:
        <Link to="/">Go to Home</Link>
        <button onClick={this.handlerToIndex} >Go to Home2</button>

        <Haha />
        
      </div>
    );
  }
}

export default UserPage;
