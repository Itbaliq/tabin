import React  from 'react';
import Post from './posts/post.jsx'
import Bastable from './bastable/bastable.jsx'
import Basket from './basket/basket.jsx'
import Add from './add/add.jsx'
import b from './profile.module.css';
import  {Button} from 'reactstrap';




const Myposts =(props) =>{
  let tab= props.posts.map( (p => <Post newPostText={props.newPostText} newCount={props.newCount} newPrice={props.newPrice} stat={p.stat} habar={p.habar} count={p.count} price={p.price} id={p.id} dispatch={props.dispatch} del={props.del} />) );

  let ser_shop= React.createRef();





  let a=() =>{
    let tex=ser_shop.current.value;
    props.dispatch({type:"update-ser-shop",new:tex});
  }






  let onSearchChange=()=>{
  let tex=ser_shop.current.value;
  if(tex===""){
    props.del({type:"rebuild-search-shop" });
  }
  }



  return  (

<div>
<div>
<input maxLength="15" onChange={onSearchChange}
          ref={ser_shop}
          value={props.ser_shop} placeholder={"Enter product name "}/>

<Button className={b.serbut}  onClick={a} color="primary" >Search</Button>

<Add
posts={props.posts}
postss={props.postss}
newPostText={props.newPostText} newCount={props.newCount} newPrice={props.newPrice}
dispatch={props.dispatch} del={props.del}/>

</div>

<Bastable
but1={props.but1}
but2={props.but2}
dispatch={props.dispatch} del={props.del}/>
{tab}
<Basket
total_price={props.total_price}
dispatch={props.dispatch} del={props.del}
/>
</div>
  )
}

export default Myposts
