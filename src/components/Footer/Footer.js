import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="footer-links-container">
            <ul>
                <h2 className="footer-links-heading">SUPPORT</h2>
                <li><a>Warranty</a></li>
                <li><a>Contact Us</a></li>
                <li><a>FAQs</a></li>
                <li><a>Shipping Policy</a></li>
                <li><a>Payments</a></li>
                <li><a>Cancellations & Returns</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">About Us</h2>
                <li><a >Corporate Profile</a></li>
                <li><a >Videos</a></li>
                <li><a >Stores</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Policy</h2>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms & Conditions</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Follow Us</h2>
                <div className="social-media-links">
                    <li><a href="https://www.facebook.com/omkar.patke.1/" className="facebook-link"><i className="lni lni-facebook-original"></i></a></li>
                    <li><a href="https://twitter.com/omkar_patke" className="twitter-link"><i className="lni lni-twitter-original"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/omkar-patke-a61b221ab/" className="linkedIn-link"><i className="lni lni-linkedin-original"></i></a></li>
                </div>
            </ul>
        </div>

    </footer>
    </>
  );
}

