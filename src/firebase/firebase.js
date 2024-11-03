// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDz89CXRervnIzTlaFd4g3aCJxyJkQSI",
  authDomain: "resort-heaven-heckathon.firebaseapp.com",
  projectId: "resort-heaven-heckathon",
  storageBucket: "resort-heaven-heckathon.firebasestorage.app",
  messagingSenderId: "209358266401",
  appId: "1:209358266401:web:3170686f921d0f7408c360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Firestore, and Storage services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Storage

export default app;
