import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnyr8lh80BD7AyYdvtCVcoFn6l0KQIeD4",
  authDomain: "maivisagecoder.firebaseapp.com",
  projectId: "maivisagecoder",
  storageBucket: "maivisagecoder.appspot.com",
  messagingSenderId: "714724996085",
  appId: "1:714724996085:web:2406d14c50cc7ada6ce6bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);