export default {
    namespace:"haha",
    state:{
        name:"long"
    },
    reducers:{
        setName(state,payload){
            //state.name=payload.data.name//would not update dom
            let newState=JSON.parse(JSON.stringify(state)) // deep clone
            newState.name=payload.data.name 
            return newState
        }
    }
}