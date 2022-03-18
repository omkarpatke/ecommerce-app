import React from 'react';
import './Footer.css';

export default function Footer() {
    const url = '#';
  return (
    <>
    <footer className="footer">
        <div className="footer-links-container">
            <ul>
                <h2 className="footer-links-heading">SUPPORT</h2>
                <li><a href={url}>Warranty</a></li>
                <li><a href={url}>Contact Us</a></li>
                <li><a href={url}>FAQs</a></li>
                <li><a href={url}>Shipping Policy</a></li>
                <li><a href={url}>Payments</a></li>
                <li><a href={url}>Cancellations & Returns</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">About Us</h2>
                <li><a href={url}>Corporate Profile</a></li>
                <li><a href={url}>Videos</a></li>
                <li><a href={url}>Stores</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Policy</h2>
                <li><a href={url}>Privacy Policy</a></li>
                <li><a href={url}>Terms & Conditions</a></li>
            </ul>

            <ul>
                <h2 className="footer-links-heading">Follow Us</h2>
                <div className="social-media-links">
                    <li><a href={'https://www.facebook.com/omkar.patke.1/'} className="facebook-link"><i className="lni lni-facebook-original"></i></a></li>
                    <li><a href={"https://twitter.com/omkar_patke"} className="twitter-link"><i className="lni lni-twitter-original"></i></a></li>
                    <li><a href={"https://www.linkedin.com/in/omkar-patke-a61b221ab/"} className="linkedIn-link"><i className="lni lni-linkedin-original"></i></a></li>
                </div>
            </ul>
        </div>

    </footer>
    </>
  );
}

