
##  redux-thunk

### set up

```bash
$ npm install --save redux-thunk

```

### Make Redux DevTool and Redux-thunk work together

use **compose** to make a enhance function,just like "Method chaining"

```bash
import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducer"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store=createStore(
    reducer,
    enhancer
)

export default store; 

```
### Where the hell (dispatch) come from?

**Do not ask**, just can do this when integrate thunk.

The key here is we can **dispatch actions** directly in side actionCreators.

```bash
export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb").then((res)=>{
            const data=res.data;
            const action=getList(data);
            dispatch(action)
        })
    }
}
```

