import React from 'react'
import './Snack2.css'
import { Link } from 'react-router-dom'
import Snacks2 from '../products/Snacks2'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Snack2 = () => {
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
         <div class="hinter">
        <section class="pointer">
          <h1>Snacks</h1>
        </section>
        <section class="manage">
          <div class="row">
            {Snacks2.map((item) => (
              <div class="col-lg-3">
              <div class="card" key={item.id}>
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <a href="">₹{item.price}.00 </a>
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
          <div class="sim">
          <Link to="/snack"><button>◀</button></Link>
            <Link to="/snack"><button>1</button></Link>
            <button class="btn2">2</button>
           <Link to="/snack3"> <button>3</button></Link>
            <Link to="/snack3"><button>▶</button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Snack2