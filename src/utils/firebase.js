// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2c86e.firebaseapp.com",
  projectId: "blog-2c86e",
  storageBucket: "blog-2c86e.appspot.com",
  messagingSenderId: "850696072643",
  appId: "1:850696072643:web:5a72e2e71ec8d5889fa176",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
