import React from 'react'
import './Masala.css'
import { Link } from 'react-router-dom'
import Masalas1 from '../products/Masalas1'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'


const Masala = () => {
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
          <h1>Masalas</h1>
        </section>
        <section class="product">
          <div class="row">
            {Masalas1.map((item) => (
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
          <div class="simple">
         <button class="btn1">1</button>
         <Link to="/Masala2"><button>2</button></Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Masala