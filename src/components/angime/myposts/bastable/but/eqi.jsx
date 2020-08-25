import React  from 'react';
import b from './profile.module.css';
import  {Button } from 'reactstrap';


const Eqi=(props) =>{
  let sortPricemax=() =>{
  props.del({type:"sort-pricemax-shop"});
  props.dispatch({type:"update-but2",new:1});
  }

  let sortPricemin=() =>{
  props.del({type:"sort-pricemin-shop"});
  props.dispatch({type:"update-but2",new:0});
  }

  if(props.but2===0){
  return(

    <b>
    <Button className={b.serbut} type="button" id="sort-name" onClick={sortPricemax} outline color="secondary">&#9660;</Button>
    </b>)

  }
  if(props.but2===1){
    return(

      <b>
      <Button className={b.serbut} type="button" id="sort-name" onClick={sortPricemin} outline color="secondary">&#9650;</Button>
      </b>)

    }
    else{
      return("")
    }
  }



export default Eqi
