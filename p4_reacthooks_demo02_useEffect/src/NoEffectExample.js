import React, { Component } from 'react';

class NoEffectExample extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
        }
        this.add=this.add.bind(this)
    }

    //before rendering
    componentDidMount(){
        console.log(`componentDidMount=>you clicked ${this.state.count} times`)
    }

    //after rendering
    componentDidUpdate(){
        console.log(`componentDidUpdate=>you clicked ${this.state.count} times`)
    }

    add(){
      this.setState({
        count:this.state.count+1
      })
    } 

    render() { 
        return ( 
            <div>
                <p>click {this.state.count} times</p>
                <button onClick={this.add}>add</button>
            </div>
         );
    }
}

export default NoEffectExample;