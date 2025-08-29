import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";   // make sure this path is correct

import Header from '../Component/Header';
import Poster from '../Component/Poster';
import Subscriptionplan from '../Component/Subscriptionplan';
import Forms from '../Component/Forms';
import Footer from '../Component/Footer';
import AddBook from './AddBook';

function Home() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Poster />

      {userEmail === "admin@gmail.com" ? (
        <AddBook />
      ) : (
        <Subscriptionplan />
      )}

      <Forms />
      <Footer />
    </>
  );
}

export default Home;
