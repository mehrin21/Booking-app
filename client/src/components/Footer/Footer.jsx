import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* LEFT */}

        <div className="flexColStart f-left">
            <img src="./image/logo2.png" alt="" width={120} />
            <span className="secondaryText">
            Our vision is to make all people <br/>
             the best place to live for them.
            </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span>145 New York, FL 5467, USA</span>

            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer
