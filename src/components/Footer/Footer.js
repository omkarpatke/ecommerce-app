import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="footer-links-container">
            <ul>
                <h2 className="footer-links-heading">SUPPORT</h2>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Cancellations & Returns</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">About Us</h2>
                <li><a href="#">Corporate Profile</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Stores</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Policy</h2>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Follow Us</h2>
                <div className="social-media-links">
                    <li><a target="_blank" href="https://www.facebook.com/omkar.patke.1/" className="facebook-link"><i className="lni lni-facebook-original"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/omkar_patke" className="twitter-link"><i className="lni lni-twitter-original"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/omkar-patke-a61b221ab/" className="linkedIn-link"><i className="lni lni-linkedin-original"></i></a></li>
                </div>
            </ul>
        </div>

    </footer>
    </>
  );
}

