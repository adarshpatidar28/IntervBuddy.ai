import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervbuddy.firebaseapp.com",
  projectId: "intervbuddy",
  storageBucket: "intervbuddy.firebasestorage.app",
  messagingSenderId: "559688966990",
  appId: "1:559688966990:web:9297238755caacbaa0341f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}