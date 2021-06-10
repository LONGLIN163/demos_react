
##  redux-saga

### install

```bash
$ npm install --save redux-saga

```

### Make Redux DevTool and Redux-saga work together, and saga connect to redux store

Use **compose** as well to make a enhance function,just like "Method chaining"

```bash
import {createStore,applyMiddleware,compose} from "redux"
import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store=createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(mySaga)

export default store; 

```
### generator functions

**Do not ask**, just **yield** something.

```bash
const res=yield axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb")
const action=getList(res.data);
yield put(action);
```

