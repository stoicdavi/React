// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRHDPpjmi0lveEZ0sBmepGwlMiPHpux9o",
  authDomain: "realtor-app-1f627.firebaseapp.com",
  projectId: "realtor-app-1f627",
  storageBucket: "realtor-app-1f627.firebasestorage.app",
  messagingSenderId: "1042719547925",
  appId: "1:1042719547925:web:1a805a56928444b37b241c",
  measurementId: "G-LJWTBEBLM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);