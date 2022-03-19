import React from 'react';
import './ProductListing.css';

export default function ProductListing() {
const products = [
  {
    img : 'https://www.trackandtrail.in/sites/default/files/styles/listing_image/public/romer3_0.png?itok=tePICCz7',
    desc : 'DSA Roamer 20T Magic Blue',
    price: 'MRP: ₹4,149',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/styles/banner/public/1_11.png?itok=b9btz3JW',
    desc : 'Roadeo STR1 29T Green',
    price: 'MRP: ₹14,500',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/styles/banner/public/str2-brown.png?itok=2v7ZLnlq',
    desc : 'Roadeo STR2 29T Brown',
    price: 'MRP: ₹14,400',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/styles/banner/public/stx_0.png?itok=YzZp-QgL',
    desc : 'Roadeo STX1 26T Sun Flower Yellow',
    price: 'MRP: ₹13235',
  },
  {
    img : '	https://www.trackandtrail.in/sites/default/files/warcy-red.png',
    desc : 'Roadeo Warcry 27.5T Neon Red with Black',
    price: 'MRP: ₹15850',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/madrock-orange_0_2.png',
    desc : 'Montra Madrock Medium 27.5T Orange',
    price: 'MRP: ₹21400',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/styles/banner/public/4_2.png?itok=gUgxQQ5G',
    desc : 'LB Valerie 26T Hot Pink',
    price: 'MRP: ₹9055',
  },
  {
    img : 'https://www.trackandtrail.in/sites/default/files/montra_black_with_orange_0_0.png',
    desc : 'Montra City Unplugged Medium Neon Orange',
    price: 'MRP: ₹19500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/229825d08227bad666eecc78c6bddbfe',
    desc : 'REGIONX 26T',
    price: 'MRP: ₹20690',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/76d594c0a93df81ebd347c985b51e74c',
    desc : 'Granite 26T',
    price: 'MRP: ₹20500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/309a832a37589b5823c2b9deb3b62309',
    desc : 'Hurricane 26T',
    price: 'MRP: ₹22500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/db8b2669960e2bdf1080609b03f87726',
    desc : 'Thunder 26T',
    price: 'MRP: ₹25500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/9248f8b6424c08922a38dcfd594f7e4b',
    desc : 'Blizzard 26T',
    price: 'MRP: ₹15500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/721d24d2979fedcd3b64e6998dbc10a6',
    desc : 'Granite 26T',
    price: 'MRP: ₹18500',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/17f4bd65a56bc18c68a26aa1e6afccb1',
    desc : 'WOLVERINE 29T',
    price: 'MRP: ₹16149',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/623aa20794e5e34802fd2bf628701305',
    desc : 'VANTAGEX 27.5T',
    price: 'MRP: ₹21789',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/8fbac53f1712d605d5c5449b1ed1c7d7',
    desc : 'KAMET 29T',
    price: 'MRP: ₹22499',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d91eec3ccc05fe917e2562f0943e44fe',
    desc : 'SUPER SONIC 24T',
    price: 'MRP: ₹15524',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/3efee3e00b4ba828c4419e0118970740',
    desc : 'KAMET 27T',
    price: 'MRP: ₹13899',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/5c859811c21d18a6fd9403fb4320b91e',
    desc : 'Thunder 29T',
    price: 'MRP: ₹22499',
  },
  {
    img : 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/2e13a3b5896b889c548d96d940dbec57',
    desc : 'KAMET 25T',
    price: 'MRP: ₹23219',
  },
];
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
           {products.map((product,index) => (
              <div className="product" key={index}>
                <a href="#wishlist">
                 <i className="product-wishlist-icon lni lni-heart"></i>
                </a>
                <img className="product-img" src={product.img} alt="cycle-img"/>
                <div className="product-desc">{product.desc}</div>
                <div className="product-price">{product.price}</div>
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
