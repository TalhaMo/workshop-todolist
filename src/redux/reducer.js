import { ADD, COMPLETE, DELETE, EDIT } from "./actionsType";

const initialState={
    tasks:[ 
    { id: 0,isCompleted:false, text: "task1" },
    { id: 1,isCompleted:false, text: "task2" },
    { id: 2,isCompleted:false, text: "task3" }]}

export const reducer=(state=initialState,action)=>{
const {type,payload}=action
switch (type) {
    case ADD:
       return {...state,tasks:state.tasks.push(payload)};

       case DELETE:
        return {...state,tasks:state.tasks.filter((task)=>task.id!==payload)};
        
       case EDIT:
        return {...state,tasks:state.tasks.map((task)=>task.id===payload.id?{...task,text:payload.text}:task)};
        case COMPLETE:
            return {...state,tasks:state.tasks.map((task)=>task.id===payload.id?{...task,isCompleted:!payload.isCompleted}:task)};

    default:
        return state;
}
}