// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5kIRlz0AQeYFLmS6uJ9Mbo9O5xu-y4I8",
  authDomain: "netflix-gpt-b4d48.firebaseapp.com",
  projectId: "netflix-gpt-b4d48",
  storageBucket: "netflix-gpt-b4d48.appspot.com",
  messagingSenderId: "500486968764",
  appId: "1:500486968764:web:0185c131e0eca37cc647b9",
  measurementId: "G-J4KBY0XQ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();