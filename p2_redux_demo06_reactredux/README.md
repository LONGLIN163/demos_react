
##  react-redux

### install

```bash
$ npm install --save redux
$ npm install --save react-redux

```

### Provider and Connector

Provider provides globle store to all components inside provider.
But be careful how to write **App** you r rendering in index.js

```bash
ReactDOM.render(
  App,
  document.getElementById('root')
);
```

Connector is used for connect to store. The params inside connector can map **state** data and **dispatcher** from the store(reducer) to the **props** of the sub component.

```bash
const stateToProps=(state)=>{
    return {
      inputvalue:state.inputvalue
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
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);
```
