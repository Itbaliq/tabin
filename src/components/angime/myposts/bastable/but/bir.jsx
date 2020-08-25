import React  from 'react';
import b from './profile.module.css';
import  {Button } from 'reactstrap';


const Bir=(props) =>{
  let sortNamemax=() =>{
  props.del({type:"sort-namemax-shop"});
  props.dispatch({type:"update-but1",new:1});
  }
  let sortNamemin=() =>{
  props.del({type:"sort-namemin-shop"});
  props.dispatch({type:"update-but1",new:0});
  }

  if(props.but1===0){
  return(

    <b>
    <Button className={b.serbut} type="button" id="sort-name" onClick={sortNamemax} outline color="secondary">&#9660;</Button>
    </b>)

  }
  if(props.but1===1){
    return(

      <b>
      <Button className={b.serbut} type="button" id="sort-name" onClick={sortNamemin} outline color="secondary">&#9650;</Button>
      </b>)

    }
    else{
      return("")
    }
  }



export default Bir
