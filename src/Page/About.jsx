import React from 'react';
import Header from '../Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <Header />

      <section className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="imm.png" 
              alt="About Library"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">About Our Library Management System</h2>
            <p>
              Our Library Management System is designed to simplify and automate the day-to-day
              operations of libraries. From managing book inventories and user accounts to
              tracking borrowing and return history, our platform ensures seamless access
              to knowledge and resources.
            </p>
            <ul>
              <li>📚 Easy cataloging of books and digital resources</li>
              <li>👥 User management with login/signup functionality</li>
              <li>🔍 Real-time book search and availability check</li>
              <li>📈 Reports on usage, late returns, and more</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h3>Our Mission</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            To provide an efficient and user-friendly system for managing libraries of all sizes,
            enhancing access to information and promoting a culture of reading and learning.
          </p>

          <h3 className="mt-4">Our Vision</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            We envision a world where every student, researcher, and reader can easily access
            the resources they need through smart library systems.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
