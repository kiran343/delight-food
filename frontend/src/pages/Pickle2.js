import React from 'react'
import './Pickle2.css'
import { Link } from 'react-router-dom'
import Pickles2 from '../products/Pickles2'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Pickle2 = () => {
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
         <div class="ball">
        <section class="once">
          <h1>Pickles</h1>
        </section>
        <section class="create">
          <div class="row">
            {Pickles2.map((item) => (
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
          <div class="powers">
            <Link to="/pickle"><button>◀</button></Link>
        <Link to="/pickle"> <button>1</button></Link>
         <button class="btn2">2</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickle2