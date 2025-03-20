import React from "react";
import "./Snack.css";
import a1 from "../images/a1.webp";
import Snacks from "../products/Snacks";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Snack = () => {
   const cartProducts=useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();
    const addCart=(item)=>{
      dispatch (addToCart(item))
    }
    const deleteCart=(item)=>{
      dispatch (deleteFromCart(item))
    }
  return (
    <div>
      <div class="beat">
        <section class="connection">
          <h1>Snacks</h1>
        </section>
        <section class="product">
          <div class="row">
            {Snacks.map((item) => (
              <div class="col-lg-3">
                <div class="card" key={item.id}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <a href="">{item.price} </a><br/>
                    {cartProducts.find((Items)=> Items.id === item.id) ?(
                      <button class="btn btn-dark"onClick={()=>deleteCart(item)}>deleteCart</button>):(
                        <button class="btn btn-danger" onClick={()=>addCart(item)}>addCart</button>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div class="container">
          <div class="simple">
            <button class="btn1">1</button>
            <Link to="/snack2">
              <button>2</button>
            </Link>
            <Link to="/Snack3"><button>3</button></Link>
            <Link to="/snack2"><button>▶</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snack;
