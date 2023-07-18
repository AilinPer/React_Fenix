// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJPuE0l0-MHvBBIleU83T3mlghubVLI0",
  authDomain: "libreriafenix-3210e.firebaseapp.com",
  projectId: "libreriafenix-3210e",
  storageBucket: "libreriafenix-3210e.appspot.com",
  messagingSenderId: "748132744069",
  appId: "1:748132744069:web:3917cce5a3776cb0cbe2ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)