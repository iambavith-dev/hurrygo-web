// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAveVp4lBshV3ksqj_tb_K5futq5RiaNu4",
  authDomain: "hurrygo-2750e.firebaseapp.com",
  databaseURL: "https://hurrygo-2750e-default-rtdb.firebaseio.com",
  projectId: "hurrygo-2750e",
  storageBucket: "hurrygo-2750e.appspot.com",
  messagingSenderId: "1007831537522",
  appId: "1:1007831537522:web:5eb54092b7fbf8ba0d6feb",
  measurementId: "G-CM10X2W5W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)