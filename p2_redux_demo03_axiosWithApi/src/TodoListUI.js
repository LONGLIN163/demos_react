import React, { Component } from 'react';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.inputvalue}
                    style={{width:'200px', marginRight:'5px'}}
                    onChange={props.changeInput}
                    value={props.inputvalue}
                />
                <Button type="primary"  onClick={props.add}>add</Button>
            </div>
            <div style={{margin:'10px 10px 10px 0 ', width:'300px'}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    // <List.Item onClick={this.props.del.bind(this,index)}> 
                    <List.Item 
                      onClick={()=>{props.del(index)}}
                    > 
                      <h3>{item}</h3>
                    </List.Item>)}
            />
            </div>
        </div>
    );
}



/* class TodoListUI extends Component {

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.props.inputvalue}
                        style={{width:'200px', marginRight:'5px'}}
                        onChange={this.props.changeInput}
                        value={this.props.inputvalue}
                    />
                    <Button type="primary"  onClick={this.props.add}>add</Button>
                </div>
                <div style={{margin:'10px 10px 10px 0 ', width:'300px'}}>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (
                        // <List.Item onClick={this.props.del.bind(this,index)}> 
                        <List.Item 
                          onClick={()=>{this.props.del(index)}}
                        > 
                          <h3>{item}</h3>
                        </List.Item>)}
                />
                </div>
            </div>
        );
    }
} */
 
export default TodoListUI;