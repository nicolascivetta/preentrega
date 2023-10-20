
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq8QqTU6jMysm33UKzL-UhqA5eLPrPwPI",
    authDomain: "proyecto-46333.firebaseapp.com",
    projectId: "proyecto-46333",
    storageBucket: "proyecto-46333.appspot.com",
    messagingSenderId: "552093234532",
    appId: "1:552093234532:web:f1adcc7b00c80ff4133671"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);