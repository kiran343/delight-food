import React from 'react'
import './Mukhwas.css'
import { Link } from 'react-router-dom'
import Mukhwaes from '../products/Mukhwaes'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Mukhwas = () => {
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
        <hr/>
 <div class="lora">
        <section class="riza">
          <h1>Mukhwas</h1>
        </section>
        <section class="vany">
          <div class="row">
            {Mukhwaes.map((item) => (
              <div class="col-lg-3">
                <div class="card" key={item.id}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <a href="">₹{item.price} .00</a>
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
          <div class="bla">
         <button class="btn1">1</button>
         <Link to="/Mukhwas2"><button>2</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mukhwas