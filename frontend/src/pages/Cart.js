import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../store/castslice/Castslice';
const Cart = () => {
  const cardproducts=useSelector((state)=>state.cart.cartItems);
const dispatch=useDispatch();
  const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
      }
  return (
    <div>
          <section class="product">
          <div class="row">
            {cardproducts.map((item) => (
              <div class="col-lg-3">
                <div class="card" key={item.id}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <a href="">{item.price} </a>
                    <button onClick={()=>deleteCart(item)}>remove</button>
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