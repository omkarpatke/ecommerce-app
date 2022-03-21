import React from 'react';
import './ProductListing.css';
import { products } from './Products';

export default function ProductListing() {
  return (
    <>
    <div className="cycles-main-container">
       <div className="filter-container">
           <h2 className="filter-name">FILTER</h2>
           <div className="filters">

           <div className="filter range">
               <h2>Price Range</h2>
               <div className="price-input">
                   <div className="field">
                       <span>Min</span>
                       <input type="number" className="input-min" value="2500"/>
                   </div>
                   <div className="separator">-</div>
                   <div className="field">
                    <span>Max</span>
                    <input type="number" className="input-max" value="20000"/>
                   </div>
                </div>

                <div className="slider">
                    <div className="progress">

                    </div>
                </div>
                <div className="range-input">
                    <input type="range" className="range-min" min="0" max="20000" value="2500" step="100"/>
                    <input type="range" className="range-max" min="0" max="20000" value="20000" step="100"/>
                </div>
           </div>
           

           <div className="filter sort-filter">
               <h3>Sort</h3>
               <div className="radio-input">
                <input type="radio" name="sort"/>
                <label for="low-to-high">low-to-high</label>
               </div>

               <div className="radio-input">
                <input type="radio" name="sort"/>
                <label for="high-to-low">high-to-low</label>
               </div>
           </div>
           
           <div className="filter rating-filter">
               <h3>Ratings</h3>
               <div className="check-box-input">
                <input type="checkbox"/>
                <label for="4-star"> 4 &#9733 &Above</label>
               </div>

               <div className="check-box-input">
                <input type="checkbox"/>
                <label for="3-star"> 3 &#9733 &Above</label>
               </div>

               <div className="check-box-input">
                <input type="checkbox"/>
                <label for="2-star"> 2 &#9733 &Above</label>
               </div>

               <div className="check-box-input">
                <input type="checkbox"/>
                <label for="1-star"> 1 &#9733 &Above</label>
               </div>
           </div>

           <div className="filter brands-filter-input">
            <h3>Brands</h3>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="BSA">BSA</label>
            </div>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="Hercules">Hercules</label>
            </div>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="Mach City">Mach City</label>
            </div>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="Montra">Montra</label>
            </div>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="Roadeo">Roadeo</label>
            </div>
            <div className="check-box-input">
                <input type="checkbox"/>
                <label for="BSA Ladybird">BSA Ladybird</label>
            </div>
           </div>
          

           <div className="filter bike-type-filter">
            <h3>Bike Type</h3>
            <div className="radio-input">
                <input type="radio" name="bike-type"/>
                <label for="City Bikes">City Bikes</label>
            </div>

            <div className="radio-input">
                <input type="radio" name="bike-type"/>
                <label for="Kids Bikes">Kids Bikes</label>
            </div>

            <div className="radio-input">
                <input type="radio" name="bike-type"/>
                <label for="Mountian Bikes">Mountian Bikes</label>
            </div>
           </div>
          

           <div className="filter gender-filter">
            <h3>Gender</h3>
            <div className="gender-checkbox-input">
                <input type="checkbox" name="gender"/>
                <label for="Male">Male</label>
            </div>

            <div className="gender-checkbox-input">
                <input type="checkbox" name="gender"/>
                <label for="Female">Female</label>
            </div>
           </div>
   
          </div>
        </div>

       <div className="products-container">
           {products.map(({img , desc ,price},index) => (
              <div className="product" key={index}>
                <a href="#wishlist">
                 <i className="product-wishlist-icon lni lni-heart"></i>
                </a>
                <img className="product-img" src={img} alt="cycle-img"/>
                <div className="product-desc">{desc}</div>
                <div className="product-price">{price}</div>
                <div className="product-links">
                    <button className="product-btn">KNOW MORE</button>
                    <button className="product-btn">Add To Cart</button>
                </div>
              </div>
            ))}
       </div>
    </div>
    </>
  )
}
