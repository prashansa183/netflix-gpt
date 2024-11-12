// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwW8Pet_rySvPSpmrA_mXmiQGCSrjY6rU",
  authDomain: "netflixgpt-7658c.firebaseapp.com",
  projectId: "netflixgpt-7658c",
  storageBucket: "netflixgpt-7658c.firebasestorage.app",
  messagingSenderId: "846707385547",
  appId: "1:846707385547:web:865975d578e9fe0f8d674e",
  measurementId: "G-4MD0QR1WFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// export {app,auth}