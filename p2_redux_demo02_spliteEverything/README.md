
##  Store Splitting

### actions

action is an **object**,store can pass this obj param to sent action to reducer. reducer receive action, then do something, return a new state to the **store**.

```bash
    deleteItem(index){
        const action = {
            type:'deleteItem',
            index
        }
        store.dispatch(action)
    }
```

### actions - actionTypes, actionCreators

To develop large projects we need splite actions.


## UI Splitting

### UI component

Only in charge of rendering, no any logic, all jxs code. 

### Why split them

Parent component can have seval logic. It is easily managed by splite to different UI component. UI components will only handle rending, and need parent component pass necessary data to them through **props**.

### stateless component
the stateless component is just a function.Stateless components can **improve performance**. Why?
They don't extend any thing and can receive props.
They don't have any state and lifecircle...
stateless components don't have any logic, but only UI.
So replace UI component to stateless components.

