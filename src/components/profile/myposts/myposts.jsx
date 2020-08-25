import React  from 'react';
import Post from './posts/post.jsx'
import Bastable from './bastable/bastable.jsx'
import Add from './add/add.jsx'
import b from './profile.module.css';
import  {Button } from 'reactstrap';




const Myposts =(props) =>{
  let tab= props.posts.map( (p => <Post newPostText={props.newPostText} newCount={props.newCount} newPrice={props.newPrice} stat={p.stat} habar={p.habar} count={p.count} price={p.price} id={p.id} dispatch={props.dispatch} del={props.del} />) );


  let ser= React.createRef();





  let a=() =>{
    let tex=ser.current.value;
    props.dispatch({type:"update-ser",new:tex});
  }






  let onSearchChange=()=>{
  let tex=ser.current.value;
  if(tex===""){
    props.del({type:"rebuild-search" });
  }
  }


  return  (

<div>
<div>
<input  maxLength="15" onChange={onSearchChange}
          ref={ser}
          value={props.ser} placeholder={"Enter product name "}/>

<Button className={b.serbut}  onClick={a} color="primary" >Search</Button>

<Add
newPostText={props.newPostText} newCount={props.newCount} newPrice={props.newPrice}
dispatch={props.dispatch} del={props.del}/>

</div>

<Bastable
but1={props.but1}
but2={props.but2}
dispatch={props.dispatch} del={props.del}/>
{tab}
</div>
  )
}

export default Myposts
