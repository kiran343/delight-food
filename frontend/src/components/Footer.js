import React from 'react'
import './Footer.css'
import DF_logo from '../images/DF_logo.avif'
import ender from '../images/ender.webp'

const Footer = () => {
  return (
    <div>
        <section class="outer">
            <img class="img-fluid"src={ender}/>
        </section>
<section class="footer">
  <div class="row flu">
    <div class="col-lg-4">
       <img src={DF_logo}/>
       <p>Delight Foods brings to you a collection of carefully selected foods from India. In our passionate search to offer food that is unique and full of flavor, we have ensured you get only the best and most authentic regional food products.</p>
    </div>
    <div class="col-lg-3">
        <ul>
            <li><h4>Quick Links</h4></li>
            <li>About Us</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation or Returns</li>
            <li>Bulk Order Form</li>
        </ul>
    </div>
    <div class="col-lg-2">
    <li><h4>Get In Touch</h4></li>
    <li><h4>Customer Care:</h4></li>
    <li>+918861416154</li>
    <li><h4>Customer Care:</h4></li>
    <a href=''>support@delightfoods.com</a>
    </div>
    <div class="col-lg-2">
    <li><h4>Let's Connect</h4></li>

    </div>
  </div>
  <hr/>
  </section>
  <section class="vlog">
<ul>
    <li>Copyright © 2025</li>
    <li><a> Delight Foods  |</a></li>
    <li><a> Powered by Shopify |</a></li>
    <li><a> Powered by Debutify |</a></li>
 
</ul>
  </section>

    </div>
  )
}

export default Footer