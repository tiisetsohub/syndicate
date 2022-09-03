import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAMbQ-ZUggOsps-RnzJnVsHzaDBSnFqP6Y",
    authDomain: "syndic8-app.firebaseapp.com",
    projectId: "syndic8-app",
    storageBucket: "syndic8-app.appspot.com",
    messagingSenderId: "878018343912",
    appId: "1:878018343912:web:ce72a576ea26f0541aaa5d",
    measurementId: "G-MMQREKB4GJ"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signoutmethod(){
    return signOut(auth)
}

export function loginmethod(email, password) {              //function used to login an exiting user on database
    return signInWithEmailAndPassword(auth, email, password)
}

export const db = getFirestore(app);