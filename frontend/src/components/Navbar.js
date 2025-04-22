import React from "react";
import "./Navbar.css";
import DF_logo from "../images/DF_logo.avif";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'


const Navbar = () => {
  const cartProducts=useSelector((item)=>item.cart.cartItems);
  return (
    <div>
      <section class="row">
        <div class="col-lg-3">
        <Link to="/"> <img src={DF_logo} /></Link>
        </div>
        <div class="col-lg-6">
          <ul>
           <Link to="/snack"> <li>SNACKS</li></Link>
            <Link to="/masala"><li>MASALAS</li></Link>
            <Link to="/pickle"><li>PICKLES</li></Link>
            <Link to="/mukhwas"><li>MUKHWAS</li></Link>
            <Link to="/rice"><li>REGIONALRICE</li></Link>
            <Link to="/shar"><li>SHARBATS </li></Link>
            
          </ul>
        </div>
        <div class="col-lg-3">
        <Link to="/forms"><i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
          <i class="fa-solid fa-magnifying-glass"></i>

          <Link to="/upload"><i class="fa-solid fa-users"></i></Link>

          <Link to="/cart"><i class="fa-solid fa-cart-shopping">
            {cartProducts.length? <span class="mey">{cartProducts.length}</span>:""}
            </i></Link>

          
           
        </div>
      </section>
      <hr/>

     
    </div>
  );
};

export default Navbar;
