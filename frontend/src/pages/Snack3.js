import React from 'react'
import './Snack3.css'
import { Link } from 'react-router-dom'
import Snacks3 from '../products/Snacks3'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'
const Snack3 = () => {
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
         <div class="akon">
        <section class="wills">
          <h1>Snacks</h1>
        </section>
        <section class="pit">
          <div class="row">
            {Snacks3.map((item) => (
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
        <div class="container">
          <div class="lanz">
          <Link to="/snack2"><button>◀</button></Link>
            <Link to="/snack"><button>1</button></Link>
            <Link to="/snack2"><button>2</button></Link>
            <button class="btn3">3</button>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Snack3