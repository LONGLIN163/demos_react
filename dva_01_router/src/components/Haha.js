import React, { Component } from 'react';
import {withRouter} from 'dva/router'

class Haha extends Component {

    handlerToIndex= () => {
        console.log(this.props )
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                Haha...
                <button onClick={this.handlerToIndex} >go to home page from haha</button>
            </div>
        );
    }
}

export default withRouter(Haha);
