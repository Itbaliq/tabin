import React from 'react';
import Myposts from './myposts/myposts.jsx'




const Profile =(props) =>{
  return   (
  <div >
    <Myposts
    posts={props.profilePage.posts}
    newId={props.profilePage.newId}
    newPostText={props.profilePage.newPostText}
    newCount={props.profilePage.newCount}
    but1={props.profilePage.but1}
    but2={props.profilePage.but2}
    newPrice={props.profilePage.newPrice}
    dispatch={props.dispatch} del={props.del}/>
  </div>)
}
export default Profile
