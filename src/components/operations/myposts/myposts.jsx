import React  from 'react';
import Post from './posts/post.jsx'
import Bastable from './bastable/bastable.jsx'
import b from './profile.module.css';
import  {Button} from 'reactstrap';




const Myposts =(props) =>{
  let tab= props.operations.map( (p => <Post goods={p.goods} price={p.price} id={p.id} dispatch={props.dispatch} del={props.del} />) );




  let a=() =>{
  alert("Why r u gae?");
  }


  return  (

<div>
<div>


<Button className={b.serbut}  onClick={a} color="primary" >Search</Button>

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
