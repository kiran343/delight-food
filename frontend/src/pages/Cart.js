import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/castslice/Castslice';
import './Cart.css'

const Cart = () => {
  const cardproducts=useSelector((state)=>state.cart.cartItems);
const dispatch=useDispatch();
  const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
      }
      const incrementCart= (id,quantity)=> {
        dispatch(updateQuantity({ id, quantity: quantity +1 }));
      }
      const decrementCart= (id, quantity) =>{
        if (quantity > 1){
          dispatch(updateQuantity({ id, quantity: quantity -1}))
        }
      }
  return (
    <div>
          <section class="portake">
          <div class="row">
            {cardproducts.map((item) => (
              <div class="col-lg-3">
                <div class="card" key={item.id}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <a href="">₹{item.price *item.quantity} .00</a>
                    <button class="prono" onClick={()=>deleteCart(item)}>remove</button><br/>

                    <button class="btn3" onClick={()=>incrementCart(item.id,item.quantity)}>+</button>
                    <span>{item.quantity}</span>
                    <button class="btn4" onClick={()=>decrementCart(item.id,item.quantity)}>-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Cart