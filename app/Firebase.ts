// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-5776a.firebaseapp.com",
  projectId: "inventory-management-5776a",
  storageBucket: "inventory-management-5776a.appspot.com",
  messagingSenderId: "713384809867",
  appId: "1:713384809867:web:4a42b0a9c1e0f136b20b8e",
  measurementId: "G-2T0ZESH249"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence); // Ensure persistence is set

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth, provider, signInWithGoogle, db, onAuthStateChanged, storage };