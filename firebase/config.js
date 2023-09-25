import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaYxQGk4Hs0EAvAMC0-x2Ews5j7VKLfOw",
  authDomain: "aktuel-urunler-7e09a.firebaseapp.com",
  projectId: "aktuel-urunler-7e09a",
  storageBucket: "aktuel-urunler-7e09a.appspot.com",
  messagingSenderId: "815050201389",
  appId: "1:815050201389:web:bea6160a546233a0bb5ba4",
  measurementId: "G-GGD5QQC9XM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);