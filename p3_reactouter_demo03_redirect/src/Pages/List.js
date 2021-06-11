import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    render() { 
        return ( 
            <h1>do-{this.state.id}</h1>
            );
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        let tempId=this.props.match.params.id
         this.setState({
             id:tempId
        })         
    }
}
        
export default List;