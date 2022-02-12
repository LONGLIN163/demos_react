import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import "antd/dist/antd.css"
import store from "./store"

console.log("store---",store)


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state=store.getState();

        console.log("state---",this.state)

        this.changeInput=this.changeInput.bind(this);
        this.add=this.add.bind(this);
        this.del=this.del.bind(this);

        this.storeChange=this.storeChange.bind(this);
        store.subscribe(this.storeChange); // when there is any action, it will trigger storeChange()

    }
    
    storeChange(){
        this.setState(store.getState())
    } 

    changeInput(e){
       //console.log(e) 
       const action={
         type:"changeInput",
         value:e.target.value
       } 
       store.dispatch(action)
    }
    add(){
        const action={
            type:"add"
        }
        store.dispatch(action)
    }
    del(index){
        const action={
            type:"del",
            index
        }
        store.dispatch(action)
    }

    render() { 
        // console.log("state---",this.state)
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputvalue}
                        style={{width:'200px', marginRight:'5px'}}
                        onChange={this.changeInput}
                        value={this.state.inputvalue}
                    />
                    <Button type="primary"  onClick={this.add}>add</Button>
                </div>
                <div style={{margin:'10px 10px 10px 0 ', width:'300px'}}>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item> 
                            <h3>{item}</h3>
                            <Button onClick={this.del.bind(this,index)}>remove</Button>
                        </List.Item>
                    )}
                />
                </div>
            </div>
         );
    }
}
 
export default TodoList;