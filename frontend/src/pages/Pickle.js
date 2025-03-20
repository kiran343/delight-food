import React from 'react'
import './Pickle.css'
import Pickles from '../products/Pickles'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Pickle = () => {
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
         <div class="tick">
        <section class="qwer">
          <h1>Pickles</h1>
        </section>
        <section class="prod">
          <div class="row">
            {Pickles.map((item) => (
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
          <div class="shy">
         <button class="btn1">1</button>
         <Link to="/Pickle2"><button>2</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickle