import React from 'react';
import {connect} from "react-redux"

// "Lao si ji" will do it like this  
const TodoList=(props)=>{
    // "Lao si ji" will do it like this as well.
    let {inputvalue,inputchange,add,list}=props
    return ( 
        <div>
            <div>
                <input 
                value={inputvalue}
                onChange={inputchange}
                />
                <button onClick={add}>todo</button> 
            </div>
            <ul>
                {
                list.map((item,index)=>{
                    return <li key={item+index}>{item}</li>
                })
                }
            </ul>
        </div>
    );
}

const stateToProps=(state)=>{
    return {
      inputvalue:state.inputvalue,
      list:state.list
    }
}

const dispatchToProps=(dispatch)=>{
    return {
        inputchange(e){
            let action={
                type:"INPUT_CHANGE",
                value:e.target.value 
            }
            dispatch(action)
        },
        add(){
            let action={
                type:"ADD",
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);

/*
class TodoList extends Component {

    render() { 
         <div>
            <div>
                <input 
                    value={this.props.inputvalue}
                    onChange={this.props.inputchange}
                />
                <button onClick={this.props.add}>todo</button> 
            </div>
            <ul>
                {
                    this.props.list.map((item,index)=>{
                    return <li key={item+index}>{item}</li>
                    })
                }
            </ul>
        </div> 
}

const stateToProps=(state)=>{
    return {
      inputvalue:state.inputvalue,
      list:state.list
    }
}

const dispatchToProps=(dispatch)=>{
    return {
        inputchange(e){
            let action={
                type:"INPUT_CHANGE",
                value:e.target.value
            }
            dispatch(action)
        },
        add(){
            let action={
                type:"ADD",
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);*/