import React , { useState } from 'react';
import b from './post.module.css';
import  {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Edit = (props) =>{
  let newName= React.createRef();
  let newCount= React.createRef();
  let newPrice= React.createRef();


  let onPostChange=()=>{
    let text=props.habar;
    text=text.replace(/^\s+/,'');
    props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:text});


  }
  let onCountChange=()=>{
    onPostChange();
    let text=newCount.current.value;
    text=text.replace(/[^0-9]/g,'');

    props.dispatch({type:"UPDATE-NEW-COUNT2",newCountt:text,id:props.id});

  }



  let edit=() =>{
    props.del({type:"edit-shop",id:props.id,newName:newName,newCount:newCount,newPrice:newPrice});
  }
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);




  return(
    <b>
    <Button className={b.serbut} outline color="primary" onClick={toggle}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
      Count:
      <br/>
      <input type="number" min="0" onChange={onCountChange} pattern={"^[0-9]*$"}
              ref={newCount}  value={props.newCount}placeholder={"Enter count "}/>
      <br/>

      </ModalBody>
      <ModalFooter>
        <Button disabled={!props.newCount} color="primary" onClick={edit}>Update</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
</b>
)





}


export default Edit
