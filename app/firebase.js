// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC-aAaa6jgfdHZVJ9fz4_q9NrCWvkBmak",
  authDomain: "drakehaven-cfe34.firebaseapp.com",
  projectId: "drakehaven-cfe34",
  storageBucket: "drakehaven-cfe34.appspot.com",
  messagingSenderId: "394948038760",
  appId: "1:394948038760:web:52f73770aadafdc0612bdd",
  measurementId: "G-QWR9MVPRKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);