import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/actionsTodo'
import EditTodo from './EditTodo'
const Todo = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div className="container">
        <div className="jumbotron">
        <div className="row">
            <div className="col-md-4 offset-3">
                <p  style={task.isCompleted? {textDecoration:'line-through'}:{}}>{task.text}</p>
            </div>
            <div className="col-md-1">
                 <i className="fa fa-trash fa-lg btn btn-danger" onClick={()=>dispatch(deleteTodo(task.id))}/>
            </div>
            <div className="col-md-1">
                <EditTodo buttonLabel={<i className="fa fa-edit fa-lg"/>} task={task}/>
            </div>
            <div className="col-md-1">
                <i className="fa fa-check btn btn-warning fa-lg"  onClick={()=>dispatch(completeTodo({id:task.id,isCompleted:task.isCompleted}))}> 
               
                </i>
                
            </div> 
        </div>
        </div></div>

    )
}

export default Todo
