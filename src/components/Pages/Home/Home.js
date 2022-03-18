import React from 'react';
import './Home.css';
import homeImg from '../../../Images/cycleHomePage.jpg';

export default function Home() {
  return (
    <>
    <div className="main-section">
        <img className="img desk-img" src={homeImg} alt="cycleImg"/>

        <div className="guide-container">
            <h2>Cycle Guide</h2>
            <div className="guide-content-container">
                <div className="cycle img">
                    <a href="#">
                        <img className="top-selling-cycle-img" src="https://trackandtrail.in/sites/all/themes/adaptivetheme/at_subtheme/images/cycle-guide-banner.png" alt="guide-cycle-img"/>
                    </a>
                </div>
    
                <div className="guide-info">
                    <h2 className="guide-heading">LET US<span><h1>HELP</h1></span> YOU PICK </h2>
                    <h4 className="guide-desc">Our cycle guide can help you narrow 
                        your search.</h4>
                    <a href="components/cycles/cycles.html" className="btn link-btn">Get Started</a>
                </div>
            </div>
        </div>

        <div className="top-selling-cycle-container">
            <h2>Top Selling Cycles</h2>
            <div className="top-selling-cycles">
                <div className="cycle img">
                    <a href="#">
                        <img className="top-selling-cycle-img" src="https://www.trackandtrail.in/sites/default/files/Mach-City_1.png" alt="top-selling-cycles"/>
                    </a>
                </div>
    
                <div className="top-cycles-info">
                    <img src="https://www.trackandtrail.in/sites/default/files/styles/brand_logo/public/Machcity%20New%20Logo.png?itok=85MxtsOZ" alt="Mach City"/>
                    <h4 className="cycle-desc">Mach City iBike Single Speed Medium Matt Black</h4>
                    <h4 className="cycle-price">MRP: 9,170</h4>
                    <a href="#" className="btn link-btn">Details</a>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}
