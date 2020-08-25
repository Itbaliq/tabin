import React from 'react';
import {NavLink} from "react-router-dom";
import b from './navb.module.css';

const Navb =(props) =>{
  let h=()=>{
    props.del({type:"total_price" });
  }
  return    (
    <nav className={b.navb}>
      <div className={b.item}>
        <NavLink to="/profile" activeClassName={b.activeLink} >Table</NavLink>
      </div>
      <div className={`${b.item} ${b.activeLink}`}>
        <NavLink to="/angime" activeClassName={b.activeLink} onClick={h}>Shop</NavLink>
      </div>
      <div className={`${b.item} ${b.activeLink}`}>
        <NavLink to="/operations" activeClassName={b.activeLink}>Operations</NavLink>
      </div>
    </nav>)
}

export default Navb
