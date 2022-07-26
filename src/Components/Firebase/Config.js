import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA-oR6FaWBmY20ppYoPTKvT_-Ae-QGM08g",
    authDomain: "ldzimportados-cortes.firebaseapp.com",
    projectId: "ldzimportados-cortes",
    storageBucket: "ldzimportados-cortes.appspot.com",
    messagingSenderId: "686830866768",
    appId: "1:686830866768:web:f6f828f236880cbecc1c55"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);