import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './footer.css';
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>

          <div className='col-lg-3 col-md-6 mb-4'>
            <img src='logo.png' alt='Logo' className='img-fluid mb-3 footer-logo' />
            <ul className='footer-links'>
              <li><a href='/'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#features'>Features</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#demo'>Demo</a></li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <h4>About</h4>
            <p>We provide smart solutions for modern libraries — from AI-driven member tracking to dynamic cataloging and analytics tools.</p>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <h4>Contact</h4>
            <p><FontAwesomeIcon icon={faPhone} /> +91-639141728</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> saini2003abhi@gmail.com</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> Laxmi Colony Sanganer Jaipur 302029</p>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <h4>Newsletter</h4>
            <p>Stay updated with the latest news and updates from our library platform.</p>
            <input type="email" placeholder="Enter your email" className="form-control mb-2" />
            <button className="btn btn-primary w-100">Subscribe</button>
          </div>

        </div>

        <div className='footer-bottom text-center pt-3'>
          <p>&copy; {new Date().getFullYear()} SmartLibrary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
