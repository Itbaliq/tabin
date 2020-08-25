import React , { useState } from 'react';
import b from './post.module.css';
import  {Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Edit = (props) =>{
  let newName= React.createRef();
  let newCount= React.createRef();
  let newPrice= React.createRef();


  let onPostChange=()=>{

    let text=newName.current.value;
    text=text.replace(/^\s+/,'');
    props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:text});


  }
  let onCountChange=()=>{

    let text=newCount.current.value;
    text=text.replace(/[^0-9]/g,'');
    props.dispatch({type:"UPDATE-NEW-COUNT",newCountt:text});

  }
  let onPriceChange=()=>{

    let text=newPrice.current.value;
    text=text.replace(/[^0-9.]/g,'');
    props.dispatch({type:"UPDATE-NEW-PRICE",newPricee:text});
  }


  let edit=() =>{
    props.del({type:"edit",id:props.id,newName:newName,newCount:newCount,newPrice:newPrice});
    props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:""});
    props.dispatch({type:"UPDATE-NEW-COUNT",newCountt:""});
    props.dispatch({type:"UPDATE-NEW-PRICE",newPricee:""});

  }
  const {

    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () =>{
        props.dispatch({type:"UPDATE-NEW-POST-TEXT",newText:props.habar});
        props.dispatch({type:"UPDATE-NEW-COUNT",newCountt:props.count});
        let ab =props.price.replace(/[^0-9.]/g,'');
        props.dispatch({type:"UPDATE-NEW-PRICE",newPricee:ab});

    setModal(!modal);
  }




  return(
    <b>

    <Button className={b.serbut} outline color="primary" onClick={toggle}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
      Name:
      <br/>
      <input  maxLength="15" onChange={onPostChange}
              ref={newName}  value={props.newPostText} placeholder={"Enter product name "}/>&#8226; Required field
      <br/>
      Count:
      <br/>
      <input type="number" min="0" onChange={onCountChange} pattern={"^[0-9]*$"}
              ref={newCount}  value={props.newCount}placeholder={"Enter count "}/>
      <br/>
      Price:
      <br/>
      <input type="number" min="0" onChange={onPriceChange}
              ref={newPrice}  value={props.newPrice}placeholder={"Enter price "}/>
      </ModalBody>
      <ModalFooter>
        <Button disabled={!props.newPostText || !props.newCount || !props.newPrice} color="primary" onClick={edit}>Update</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
</b>
)





}


export default Edit
