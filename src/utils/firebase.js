// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRZKHTAGULSWB8y_w0pWmyi4hXrVuv4nY",
  authDomain: "netflixgpt-e920c.firebaseapp.com",
  projectId: "netflixgpt-e920c",
  storageBucket: "netflixgpt-e920c.appspot.com",
  messagingSenderId: "456890098668",
  appId: "1:456890098668:web:89f7c15a3fcf6b2bba96c9",
  measurementId: "G-GVLDV2PS2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()