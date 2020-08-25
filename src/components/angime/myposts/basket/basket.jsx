import React  from 'react';
import b from './post.module.css';
import  {Table,Button} from 'reactstrap';

const Post = (props) =>{






let h=()=>{
  props.del({type:"buy" });
}
  return(
  <Table striped bordered hover cellSpacing="1" >
      <thead id={b.remover}>
          <tr>
          </tr>
      </thead>
  <tbody >
  <td  className={b.table_name}>
    Total price:

  </td>
  <td  className={b.table_price}>
      {props.total_price}
  </td>
  <td  className={b.table_actions}>
  <Button className={b.table_price}  onClick={h} color="primary" >Buy</Button>

  </td>

  </tbody>
  </Table>
)





}


export default Post
