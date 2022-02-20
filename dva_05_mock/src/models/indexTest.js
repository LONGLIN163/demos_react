import * as apis from '../services/example'
export default {
    namespace:"haha",
    state:{
        name:"long",
        topicsData:[]
    },
    reducers:{
        setName(state,payload){
            //state.name=payload.data.name//would not update dom
            let newState=JSON.parse(JSON.stringify(state)) // deep clone
            console.log("setName---payload---",payload)
            newState.name=payload.data.name 
            return newState
        },
        setTopicsData(state,payload){
            let newState=JSON.parse(JSON.stringify(state)) // deep clone
            console.log("setTopicsData reducer--payload--",payload)
            newState.topicsData=payload.data 
            return newState
        },
        testWatcher(state,payload){
            console.log("watcher is working...")
            console.log("testWatcher---payload---"+payload)
            return state
        }
    },
    effects:{
        *setNameAsync({ payload }, { put, call }){
            //yield console.log("123")
            yield console.log(payload)
            yield put( // using for actions, here trigger methods in the reducer and pass a payload
                {
                    type:"setName",
                    data:{
                        name:"set name in effects"
                    }
                }
            )
        },
        *getTopics({ payload }, { put, call }){
            let res = yield call(apis.getTopics)
             console.log("topics data---",res)
            if(res.data){
                yield put(
                    {
                        type:"setTopicsData",
                        data:res.data.data
                    }
                )
            }

        }
    },
    subscriptions:{
        watchPage({dispatch,history}){
           history.listen((params) => {
               console.log("params---",params)
               if(params.pathname==="/user"){
                   dispatch({
                     type:"testWatcher",
                    //  data:{
                    //      name:"be carefull the format of dispatch()"
                    //  }
                   })
               }
           })
        }
    }
}