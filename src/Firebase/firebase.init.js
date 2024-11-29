// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_d-VKQsz3o8pXiI6N5k8XGGBNAQUBjT0",
  authDomain: "coffee-store-a871b.firebaseapp.com",
  projectId: "coffee-store-a871b",
  storageBucket: "coffee-store-a871b.firebasestorage.app",
  messagingSenderId: "824083644963",
  appId: "1:824083644963:web:07599b9f57240204dbe796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;