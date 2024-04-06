import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBeYxy3rUo7b20ZqRYnib1tu2W-lIMk8gE",
  authDomain: "zoom-91354.firebaseapp.com",
  projectId: "zoom-91354",
  storageBucket: "zoom-91354.appspot.com",
  messagingSenderId: "254012902952",
  appId: "1:254012902952:web:6f935f4c156198f26aaf1d",
  measurementId: "G-L1YL7PQ45S"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
