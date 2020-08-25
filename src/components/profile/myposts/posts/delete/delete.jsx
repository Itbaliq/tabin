import React , { useState } from 'react';
import b from './post.module.css';
import  {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Delete = (props) =>{
  



  let del=() =>{
    props.del({type:"delete",id:props.id});
  }

  const {

    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);




  return(
    <b><Button className={b.serbut}   outline color="danger" onClick={toggle} >Delete</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
      <ModalBody>
    Are you sure, that you are want to perform this action?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={del}>Yes</Button>{' '}
        <Button color="secondary" onClick={toggle}>No</Button>
      </ModalFooter>
    </Modal>
</b>
)





}


export default Delete
