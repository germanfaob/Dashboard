// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUV6V75NV88QpulESHk1sK2-DP2jgg0Jk",
  authDomain: "newsnmore-be3c5.firebaseapp.com",
  projectId: "newsnmore-be3c5",
  storageBucket: "newsnmore-be3c5.appspot.com",
  messagingSenderId: "587373587719",
  appId: "1:587373587719:web:4c86245898c473544429a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
