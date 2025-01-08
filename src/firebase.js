// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRo9WRjg0b7K1Ilsa1VOQbgz1LRuod6U8",
  authDomain: "food-commerce-ff7e1.firebaseapp.com",
  projectId: "food-commerce-ff7e1",
  storageBucket: "food-commerce-ff7e1.firebasestorage.app",
  messagingSenderId: "99899722568",
  appId: "1:99899722568:web:7e498c855d4579c348c17d",
  measurementId: "G-KYJKEZG8N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth, app, analytics}