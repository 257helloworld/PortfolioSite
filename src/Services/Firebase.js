// Import the functions you need from the SDKs you need

import { initializeApp, getAuth, getStorage } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCXFMflbKmTI5u64BImcxIlSHX32WeYOfU",
  authDomain: "aditya-portfolio-site.firebaseapp.com",
  projectId: "aditya-portfolio-site",
  storageBucket: "aditya-portfolio-site.appspot.com",
  messagingSenderId: "778094440107",
  appId: "1:778094440107:web:4f8318935f4dae99f011ee",
  measurementId: "G-6PTC4N8SXL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app