import React from 'react'
import './Masala2.css'
import Masalas2 from '../products/Masalas2'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Masala2 = () => {
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
        <div class="hang">
        <section class="berry">
          <h1>Masalas</h1>
        </section>
        <section class="varna">
          <div class="row">
            {Masalas2.map((item) => (
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
          <div class="lg">
             <Link to="/Masala"><button>◀</button></Link>
            <Link to="/Masala"><button>1</button></Link>
            
              <button class="btn2">2</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masala2