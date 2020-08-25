import React , { useState } from 'react';
import b from './profile.module.css';
import  {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const Add =(props) =>{

  let newPostElement= React.createRef();
  let newCount= React.createRef();
  let newPrice= React.createRef();



  let addPost=() =>{

    props.dispatch({type:"ADD-POST",index:props.newId});

  }





  let onIdChange=()=>{
     let text=Math.floor(Math.random(1) * Math.floor(100000));
    props.dispatch({type:"UPDATE-NEW-ID",newIdd: text});

  }

  let onPostChange=()=>{

    let text=newPostElement.current.value;
    text=text.replace(/^\s+/,'');
    props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:text});
    onIdChange();

  }
  let onCountChange=()=>{

    let text=newCount.current.value;

    text=text.replace(/[^0-9]/g,'');

    props.dispatch({type:"UPDATE-NEW-COUNT",newCountt:text});

  }


  let onPriceChange=()=>{

    let tex=newPrice.current.value;
    tex=tex.replace(/[^0-9.]/g,'');
    props.dispatch({type:"UPDATE-NEW-PRICE",newPricee:tex});
  }

  const {

    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:""});
    props.dispatch({type:"UPDATE-NEW-COUNT",newCountt:""});
    props.dispatch({type:"UPDATE-NEW-PRICE",newPricee:""});
    setModal(!modal);}

  return  (

    <b>
      <Button className={b.addbut} color="primary" onClick={toggle}>Add New</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
        Name:
        <br/>
        <input type="name"  maxLength="15" onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}  placeholder={"Enter product name "}/>&#8226; Required field
        <br/>
        Count:
        <br/>
        <input type="number" min="0"  pattern={"^[0-9]*$"}

         onChange={onCountChange}
                  ref={newCount}
                  value={props.newCount} placeholder={"Enter count "} />
        <br/>
        Price:
        <br/>
        <input type="number" min="0"
        onChange={onPriceChange}
                            ref={newPrice}
                            value={props.newPrice} placeholder={"Enter price "}/>


        </ModalBody>
        <ModalFooter>
          <Button  disabled={!props.newPostText || !props.newCount || !props.newPrice }   color="primary"  onClick={addPost}>Add</Button>{' '}
        </ModalFooter>
      </Modal>
    </b>
  )
}
//|| !props.newPrice
export default Add
