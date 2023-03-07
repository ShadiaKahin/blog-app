import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDaCT9-eEKDDRY4HQsR16mB2YKcgJ4w8Q4",
    authDomain: "blogproject-1c067.firebaseapp.com",
    projectId: "blogproject-1c067",
    storageBucket: "blogproject-1c067.appspot.com",
    messagingSenderId: "363910833378",
    appId: "1:363910833378:web:c169434f8ba94602de2abb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();