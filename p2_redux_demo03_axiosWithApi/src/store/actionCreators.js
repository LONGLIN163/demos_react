import {CHANGE_INPUT,ADD,DEL,GET_LIST} from "./actionTypes"
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