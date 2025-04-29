import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo">
        <h2>LOGO</h2>
        <p>Park Ease is a solution that specializes in license plate and vehicle recognition technology.</p>
        <div className="socials">
          <i></i><i></i><i></i>
        </div>
      </div>

      <div className="footer-section contact">
        <h3>Contact us</h3>
        <p>Digital Lab, Sri Lanka Telecom PLC,<br />Lotus Road, Colombo 01, Sri Lanka</p>
        <p> 011-2430010</p>
        <p> info@sltdigitallab.lk</p>
      </div>

      <div className="footer-section pages">
        <h3>Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Subscription Plan</li>
          <li>Contact</li>
          <li>Pre-book Slot</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
