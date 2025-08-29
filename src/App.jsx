import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Demo from './Page/Demo';
import Features from './Page/Features';
import Auth from './Component/Auth';
// import { auth } from './Component/firebase'; // Firebase instance
import { auth } from './Page/firebase';
import AddBook from './Page/AddBook';
import AllBook from './Page/AllBook';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check user login state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Auth />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/about" element={user ? <About /> : <Navigate to="/" />} />
        <Route path="/services" element={user ? <Services /> : <Navigate to="/" />} />
        <Route path="/demo" element={user ? <Demo /> : <Navigate to="/" />} />
        <Route path="/features" element={user ? <Features /> : <Navigate to="/" />} />
        <Route path="/admin" element={user ? <AddBook/> : <Navigate to="/" />} />
        <Route path="/AllBook" element={user ? <AllBook/> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
