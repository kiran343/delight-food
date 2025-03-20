import React from 'react'
import './Shar.css'
import Shars from '../products/Shars'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Shar = () => {
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
          <div class="pigin">
        <section class="beggin">
          <h1>Regional Rice</h1>
        </section>
        <section class="quicks">
          <div class="row">
            {Shars.map((item) => (
              <div class="col-lg-3">
              <div class="card" key={item.id}>
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <a href="">{item.price} </a>
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
      </div>
    </div>
  )
}

export default Shar