import React from 'react';
import './forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Forms() {
  return (
    <>
      <div className="title text-center">
        <h1>Get In Touch</h1>
        <p>Ready to transform your library? Contact us today!</p>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-6 mb-4">
            <div className="contact-info">
              <div className="info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>+91-639141728</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <strong>Email</strong>
                  <p>saini2003abhi@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <strong>Address</strong>
                  <p>
                    Laxmi Colony Sanganer Jaipur 274301<br />
                   Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" className="form-control" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your message" className="form-control" rows="5"></textarea>
              </div>
              <button className="btn btn-primary w-100 mt-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
