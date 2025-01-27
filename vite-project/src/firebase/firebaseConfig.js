// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the required Firebase modules
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCkklYmZE_BUmkJXgn7Ep__wAY03dM2JuI",
//     authDomain: "waste-management-f360c.firebaseapp.com",
//     projectId: "waste-management-f360c",
//     storageBucket: "waste-management-f360c.appspot.com",
//     messagingSenderId: "244322267698",
//     appId: "1:244322267698:web:3286b3433619f1a022822b",
//     measurementId: "G-6H9DEGB3BF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// export const auth = getAuth(app);        // For Authentication
// export const db = getFirestore(app);    // For Firestore (Database)
// export const storage = getStorage(app); // For Firebase Storage

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkklYmZE_BUmkJXgn7Ep__wAY03dM2JuI",
  authDomain: "waste-management-f360c.firebaseapp.com",
  projectId: "waste-management-f360c",
  storageBucket: "waste-management-f360c.appspot.com",
  messagingSenderId: "244322267698",
  appId: "1:244322267698:web:3286b3433619f1a022822b",
  measurementId: "G-6H9DEGB3BF",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
console.log(import.meta.env);
