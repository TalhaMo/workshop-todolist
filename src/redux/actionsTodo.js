import { ADD, COMPLETE, DELETE, EDIT } from "./actionsType"

export const addTodos=(payload)=>{
    return {type:ADD,payload}
}
export const deleteTodo=(payload)=>{
    return {type:DELETE,payload}
}
export const editTodo=(payload)=>{
    return {type:EDIT,payload}
}

export const completeTodo=(payload)=>{
    return {type:COMPLETE,payload}
}