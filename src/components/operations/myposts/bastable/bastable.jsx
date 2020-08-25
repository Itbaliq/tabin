import React  from 'react';
import b from './profile.module.css';
import Bir from './but/bir.jsx';
import Eqi from './but/eqi.jsx';
import  {Table } from 'reactstrap';


const Bastable=(props) =>{

  return(
    <Table striped bordered hover cellSpacing="1" >
        <thead>
            <tr>
                <th scope="col" className={b.table_actions}>
                    Id
                    <Bir
                    but1={props.but1}
                    dispatch={props.dispatch} del={props.del}/>
                </th>
                <th scope="col" className={b.table_price}>
                    Income
                    <Eqi
                    but2={props.but2}
                    dispatch={props.dispatch} del={props.del}/>
                </th>
                <th scope="col" className={b.table_name}>Goods</th>
            </tr>
        </thead>
    <tbody id={b.remover}></tbody>
    </Table>)}



export default Bastable
