import React from 'react';
import {useSelector}from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const tasks = useSelector(state => state.tasks)

    return (
        <div>
            {tasks.map(task=>(<Todo key={task.id} task={task}/>))}
        </div>
    )
}

export default TodoList
