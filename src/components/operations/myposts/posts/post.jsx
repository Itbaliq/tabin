import React  from 'react';
import b from './post.module.css';
import  {Table } from 'reactstrap';

const Post = (props) =>{





if(props.id!==0){
  return(
  <Table striped bordered hover cellSpacing="1" >
      <thead id={b.remover}>
          <tr>
          </tr>
      </thead>
  <tbody >
  <td  className={b.table_name}>
    {props.id}
  </td>
  <td  className={b.table_price}>
      {props.price}
  </td>
  <td  className={b.table_actions}>
{props.goods}
  </td>
  </tbody>
  </Table>
)
}
else{
  return(
    <b></b>
  )
}





}


export default Post
