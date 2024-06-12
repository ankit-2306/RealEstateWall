// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e630f.firebaseapp.com",
  projectId: "real-estate-e630f",
  storageBucket: "real-estate-e630f.appspot.com",
  messagingSenderId: "19761881366",
  appId: "1:19761881366:web:4d30deaf299885ddacf037"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

