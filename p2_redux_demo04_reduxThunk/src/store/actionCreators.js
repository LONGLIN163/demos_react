import {CHANGE_INPUT,ADD,DEL,GET_LIST} from "./actionTypes"
import axios from "axios"

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})
export const add=()=>({
    type:ADD
})
export const del=(index)=>({ 
    type:DEL,
    index
})
export const getList=(data)=>({
    type:GET_LIST,
    data
})

export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get("https://mocki.io/v1/049f7f55-5058-482f-ab80-cdb5f1ea21eb").then((res)=>{
            const data=res.data;
            const action=getList(data);
            dispatch(action)
        })
    }
} 