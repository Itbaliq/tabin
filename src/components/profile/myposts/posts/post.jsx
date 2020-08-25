import React  from 'react';
import b from './post.module.css';
import Edit from './edit/edit.jsx'
import Delete from './delete/delete.jsx'
import  {Table} from 'reactstrap';

const Post = (props) =>{



  if(props.id===0){
  return   (<b></b>)}

  if(props.stat===0){
  return   (<b></b>)}

  if(props.stat===1) {

  return(
  <Table striped bordered hover cellSpacing="1" >
      <thead id={b.remover}>
          <tr>
          </tr>
      </thead>
  <tbody >
  <td  className={b.table_name}>
    {props.habar}
    <b className={b.rightcol} >{props.count}</b>
  </td>
  <td  className={b.table_price}>
      {props.price}
  </td>
  <td  className={b.table_actions}>

  <Edit
  newPostText={props.newPostText} newCount={props.newCount} newPrice={props.newPrice}
  stat={props.stat} habar={props.habar} count={props.count} price={props.price} id={props.id}
dispatch={props.dispatch} del={props.del}
  />

  <Delete
  stat={props.stat} habar={props.habar} count={props.count} price={props.price} id={props.id}
dispatch={props.dispatch} del={props.del}
  />
  </td>
  </tbody>
  </Table>
)

}
else{
return   (<b></b>)}


}


export default Post
