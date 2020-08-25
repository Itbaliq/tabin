import React , { useState } from 'react';
import b from './profile.module.css';
import Option from './option.jsx';
import  {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Add =(props) =>{

  let newPostElement= React.createRef();
  let newCount= React.createRef();


  let name= props.postss.map( (p => <Option  id={p.id} option={p.habar}/>) );

  let addPost=() =>{

      props.del({type:"add to basket"});

  }


  let onPostChange=()=>{

    let text=newPostElement.current.value;
    text=text.replace(/^\s+/,'');
    props.dispatch({type:"UPDATE-NEW-POST-TEXT-shop",newText:text});

  }
  let onCountChange=()=>{

    let text=newCount.current.value;
    text=text.replace(/[^0-9]/g,'');
    props.dispatch({type:"UPDATE-NEW-COUNT2-add",newCountt:text});

  }




  const {

    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return  (

    <b>
      <Button className={b.addbut} color="primary" onClick={toggle}>Add to the basket</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        Name:
        <br/>
        <input type="name"  maxLength="15" onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}  placeholder={"Enter product name "} list="datalist-name"/>&#8226; Required field
        <datalist id="datalist-name">
            <select name="{NameOfYourField}">
              {name}
            </select>
        </datalist>
        <br/>
        Count:
        <br/>
        <input type="number" min="0"   pattern={"^[0-9]*$"}

         onChange={onCountChange}
                  ref={newCount}
                  value={props.newCount} placeholder={"Enter count "}  />

        <br/>


        </ModalBody>
        <ModalFooter>
          <Button  disabled={!props.newPostText || !props.newCount}   color="primary"  onClick={addPost}>Add</Button>{' '}
        </ModalFooter>
      </Modal>
    </b>
  )
}

export default Add
