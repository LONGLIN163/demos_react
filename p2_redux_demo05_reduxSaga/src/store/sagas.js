import {takeEvery,put} from "redux-saga/effects"
import {GET_MYLIST} from "./actionTypes"
import {getList} from "./actionCreators"
import axios from "axios"

//generator functions
function* mySaga() {
  yield takeEvery(GET_MYLIST,getMyList)
}

// we will write logic in here
function* getMyList(){
    // axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb").then((res)=>{
    //     const data=res.data;
    //     const action=getList(data);
    //     put(action)
    // })

    const res=yield axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb")
    const action=getList(res.data);
    yield put(action);
}

export default mySaga;