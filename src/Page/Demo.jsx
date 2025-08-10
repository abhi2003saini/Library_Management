import React from 'react';
import Header from '../Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Component/Footer';

function Demo() {
  return (
    <>
    <div>
      <Header />
      <section className="container my-5">
        <h2 className="text-center mb-4">Live Demo</h2>
        <p className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Watch a quick walkthrough of our Library Management System and discover how easy it is to
          manage books, users, and transactions. See how your library can benefit from automation.
        </p>
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="ratio ratio-16x9 shadow-sm rounded">
              <iframe
                src="https://www.youtube.com/embed/noWncXH7dwc?si=Bd3Ofz7EcFofbakk" 
                title="Library Management System Demo"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded h-100 shadow-sm">
              <h5>Step 1: Login/Register</h5>
              <p>Create an account or sign in to access your dashboard and library services.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded h-100 shadow-sm">
              <h5>Step 2: Browse & Search</h5>
              <p>Search for books by title, author, or category with real-time filtering.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-3 border rounded h-100 shadow-sm">
              <h5>Step 3: Issue & Return</h5>
              <p>Borrow available books, track due dates, and manage returns with ease.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Demo;
