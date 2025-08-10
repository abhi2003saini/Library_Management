import React from 'react';
import Header from '../Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <div>
      <Header />
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Library Services</h2>
        <p className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Our Library Management System offers a suite of modern and efficient services to help
          institutions, schools, and universities manage their libraries with ease and professionalism.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title"> Book Catalog Management</h5>
                <p className="card-text">
                  Easily manage the collection of books with automated cataloging, categorization,
                  and search capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">👥 Member Management</h5>
                <p className="card-text">
                  Keep track of all registered users, including students, faculty, and guests,
                  with secure authentication and profile management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">🔄 Issue & Return Tracking</h5>
                <p className="card-text">
                  Manage the lending and return of books with due dates, fines for overdue returns,
                  and real-time status updates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">💻 Digital Library Access</h5>
                <p className="card-text">
                  Provide online access to e-books, research papers, and academic journals
                  through a secure digital portal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">📊 Usage Reports</h5>
                <p className="card-text">
                  Generate reports on book circulation, top-read titles, late returns, and
                  overall system usage for administration insights.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">🔐 Secure Authentication</h5>
                <p className="card-text">
                  Use Firebase Authentication to securely sign in users and manage sessions
                  across devices and roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
