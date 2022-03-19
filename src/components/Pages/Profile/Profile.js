import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import ProfileImg from '../../../Images/pngwing.com.png';

export default function Profile() {
  return (
    <>
    <div className="profile-container">
        <div className="profile-card">
            <h2>Profile</h2>
            <div className="user-info-container">
                <img src={ProfileImg} alt="user-img"/>

                <div className="user-info">
                  <div className="user-name"><strong>Name:</strong>   Omkar Sanjay Patke</div>
                  <div className="user-email"><strong>Email:</strong>   omkarpatke1101@gmail.com</div>
                  <div className="user-phone-number"><strong>Phone No:</strong>   9876543217</div>
                </div>
            </div>
            <div className="btns-container">
                <button className="product-btn switch-btn">Switch to Another Account</button>
                <Link to='/' className="proceed-to-checkout-btn logout-btn">Logout</Link>  
            </div>
        </div>
    </div>
    </>
  )
}
