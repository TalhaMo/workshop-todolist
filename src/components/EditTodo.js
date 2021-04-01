import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { editTodo } from '../redux/actionsTodo';
import {useDispatch} from 'react-redux';

const EditTodo = (props) => {
  const {
    buttonLabel,
    className,
    task
  } = props;

  const [modal, setModal] = useState(false);
const [editTask, setEditTask] = useState(task.text)
const dispatch = useDispatch()
  const toggle = () => setModal(!modal);
  const edit=()=>{
    dispatch(editTodo({id:task.id,text:editTask}));
    toggle()
  }

  return (
    <div>
      <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
         <input value={editTask} onChange={e=>setEditTask(e.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTodo;