import React from 'react'
import './Mukhwas2.css'
import Mukhwaes2 from '../products/Mukhwaes2'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/castslice/Castslice'

const Mukhwas2 = () => {
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
           <div class="van">
        <section class="writer">
          <h1>Mukhwas</h1>
        </section>
        <section class="aswell">
          <div class="row">
            {Mukhwaes2.map((item) => (
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
          <div class="cel">
          <Link to="/Mukhwas"><button>◀</button></Link>
            <Link to="/Mukhwas"><button>1</button></Link>
            <button class="btn2">2</button>
           
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Mukhwas2