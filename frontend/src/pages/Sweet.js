import React from "react";
import "./Sweet.css";
import c1 from "../images/c1.webp";
import c2 from "../images/c2.webp";
import c3 from "../images/c3.webp";
import c4 from "../images/c4.webp";
import b1 from "../images/b1.webp";
import b2 from "../images/b2.webp";
import b3 from "../images/b3.webp";

const Sweet = () => {
  return (
    <div >
      <div class="jii">
      <section class="stock"></section>
      <section class="filter">
        <h2>BEST SELLING PRODUCTS</h2>
        <h4>Grab our best products to brighten your day</h4>
        <div class="row">
          <div class="card-group">
            <div class="card">
              <img src={c1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4>Kesar Dry Petha 350g</h4>
                <span>Rs.250.00</span>
              </div>
            </div>
            <div class="card">
              <img src={c2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4>Calcutta Meetha paan</h4>
                <span>Rs.350.00</span>
              </div>
            </div>
            <div class="card">
              <img src={c3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4>Dry petha 350g</h4>
                <span>Rs.300.00</span>
              </div>
            </div>
            <div class="card">
              <img src={c4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4>Banarasi Meetha paan</h4>
                <span>Rs.400.00</span>
              </div>
            </div>
          </div>
          <button>View all</button>
        </div>
      </section>
      <section class="over">
        <h2>Our Collections</h2>
        <div class="row">
          <div class="col-lg-3 pc-1">
            <h2>Mouth Freshener</h2>
            <button>shop now</button>
          </div>
          <div class="col-lg-3 pc-2">
            <h2>Pickles</h2>
            <button>shop now</button>
          </div>
          <div class="col-lg-3 pc-3">
            <h2>Bakery</h2>
            <button>shop now</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 pc-4">
            <h2>Ready to Cook</h2>
            <button>shop now</button>
          </div>
          <div class="col-lg-3 pc-5">
            <h2>Masalas</h2>
            <button>shop now</button>
          </div>
          <div class="col-lg-3 pc-6">
            <h2>Sharbats</h2>
            <button>shop now</button>
          </div>
        </div>
      </section>

      <section class="qwerty">
        <div class="container">
        <h2>Trending Blogs</h2>
        <div class="card-group">
  <div class="card">
    <img src={b1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><a>Tomato Thokku</a></h5>
      <p class="card-text">Tomato Thukku : A flavoful journey into south india cuisine Tomato Thukka is more than just a condiment ;it's.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">delhi warehouse</small>
    </div>
  </div>
  <div class="card">
    <img src={b2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><a>Kesar Angoori Petha</a></h5>
      <p class="card-text">introduction few thing capture the essure of india rish culinary heritage as perperty as a well sweet Among..</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">delhi warehouse</small>
    </div>
  </div>
  <div class="card">
    <img src={b3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><a>calcutta Meetha Paan</a></h5>
      <p class="card-text">Natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">delhi warehouse</small>
    </div>
  </div>
</div>
 </div>
        <button>View all</button>
      </section>
     
      
      
    </div>
    </div>
  );
};

export default Sweet;
