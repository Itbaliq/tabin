import React from 'react';
import Myposts from './myposts/myposts.jsx'




const Angime =(props) =>{
  return   (
  <div >
    <Myposts
    posts={props.profilePage.goods}
    postss={props.profilePage.posts}
    newId={props.profilePage.newId}
    newPostText={props.profilePage.newPostText}
    newCount={props.profilePage.newCount}
    but1={props.profilePage.but1}
    but2={props.profilePage.but2}
    newPrice={props.profilePage.newPrice}
    total_price={props.profilePage.total_price}
    dispatch={props.dispatch} del={props.del}/>
  </div>)
}
export default Angime
