// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0P9xbXA53anl5QnICwi0CCG2Dn3IUdW4",
  authDomain: "the-book-heaven-b4aed.firebaseapp.com",
  projectId: "the-book-heaven-b4aed",
  storageBucket: "the-book-heaven-b4aed.firebasestorage.app",
  messagingSenderId: "739723877077",
  appId: "1:739723877077:web:814040d41399e87d1ea05c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
