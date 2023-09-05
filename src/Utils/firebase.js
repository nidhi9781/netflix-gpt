// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqmvfWevuKbgch_WkRETZoKYGo-JomwU",
  authDomain: "netflixgpt-53a81.firebaseapp.com",
  projectId: "netflixgpt-53a81",
  storageBucket: "netflixgpt-53a81.appspot.com",
  messagingSenderId: "549264543694",
  appId: "1:549264543694:web:f1d775a624c11f521da59f",
  measurementId: "G-MCDB5ZDRCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();