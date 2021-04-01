import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodos } from '../redux/actionsTodo'

const InputTodo = () => {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch()
    const add=()=>{
        if(Input!=='')
        {dispatch(addTodos({id:Math.random(),isCompleted:false,text:Input}))
        setInput('')} else{
            alert('please add task')
        }
    }
    return (
        <div className="row mt-3">
            <div className="col col-md-6 offset-3">
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Add your task" value={Input} onChange={(e)=>setInput(e.target.value)}/>
                <button className="btn btn-success" onClick={add}>Add</button>
            </div>
            </div>
        </div>
    )
}

export default InputTodo
