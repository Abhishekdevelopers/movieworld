import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC3JX04fiJRbP1EJNQJE3lYyhh3RtK9yXk",
  authDomain: "movieworld-6ab62.firebaseapp.com",
  projectId: "movieworld-6ab62",
  storageBucket: "movieworld-6ab62.appspot.com",
  messagingSenderId: "295181967293",
  appId: "1:295181967293:web:13f7697ad6c5b64adabcd4"
};

const app = initializeApp(firebaseConfig);
export const  db= getFirestore(app);
export const moviesRef= collection(db, "movies")
export const reviewsRef= collection(db, "reviews")
export const usersRef= collection(db, "users")
export default app;