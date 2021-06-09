import React, { Component } from 'react';
import "antd/dist/antd.css"
import store from "./store"
import TodoListUI from "./TodoListUI"
import {changeInputAction,add,del,getList} from "./store/actionCreators"
import axios from "axios"


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state=store.getState();
        this.changeInput=this.changeInput.bind(this);
        this.add=this.add.bind(this);
        this.del=this.del.bind(this);

       this.storeChange=this.storeChange.bind(this);
       store.subscribe(this.storeChange); 

    }
    
    storeChange(){
        this.setState(store.getState())
    } 

    componentDidMount(){
        axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb").then((res)=>{
            const data=res.data;
            const action=getList(data)
            store.dispatch(action)
        })
    }

    changeInput(e){
       const action=changeInputAction(e.target.value)
       store.dispatch(action)
    }

    add(){
        const action=add()
        store.dispatch(action)
    }

    del(index){
        const action=del(index)
        store.dispatch(action)
    }
 

    render() { 
        return ( 
            <TodoListUI
              inputvalue={this.state.inputvalue}
              changeInput={this.changeInput}
              list={this.state.list}
              add={this.add}
              del={this.del}
            />
         );
    }
}
 
export default TodoList;