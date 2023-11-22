// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBHz9Bzhmsw6kYjs1Jyc-nib20zWoLrJM",
  authDomain: "jumbo-bakery.firebaseapp.com",
  projectId: "jumbo-bakery",
  storageBucket: "jumbo-bakery.appspot.com",
  messagingSenderId: "18892893809",
  appId: "1:18892893809:web:dc87c61bfa329f35db75d0"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;