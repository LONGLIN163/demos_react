
##  redux+antd

### set up antd and redux

```bash
$ npm install antd --save
$ npm install --save redux
```

### set up REDUX_DEVTOOLS

Add: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

### create store , reducer and actions

See the code.

### cautions

1. Store need to **subscribe** the component to update component.But there is **bug** here.
2. The state in the reducer can not be change, but return a new state. We can use **deep clone**.

```bash
let newState = JSON.parse(JSON.stringify(state))
```







