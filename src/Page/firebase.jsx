// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlmhz1hFomQXJJC9yAt_RUIdRnKVG5jFE",
  authDomain: "library-management-c2995.firebaseapp.com",
  projectId: "library-management-c2995",
  storageBucket: "library-management-c2995.firebasestorage.app",
  messagingSenderId: "234887102862",
  appId: "1:234887102862:web:d456c931871fda52b764df",
  measurementId: "G-ZNYJE40J23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Optional: export app if needed
export { app, analytics };
