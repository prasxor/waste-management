// firebaseConfig.js
import { initializeApp } from 'firebase/app'; // Modular SDK
import { getAuth } from 'firebase/auth';      // Import auth from modular SDK
import { getFirestore } from 'firebase/firestore'; // Import Firestore from modular SDK
import { getStorage } from 'firebase/storage'; // Import storage from modular SDK



const firebaseConfig = {
    apiKey: "AIzaSyDEbTMkIOWxrerJXHVr1sNr8neWoZB6eIs",
    authDomain: "wastemanagementapp-5c715.firebaseapp.com",
    projectId: "wastemanagementapp-5c715",
    storageBucket: "wastemanagementapp-5c715.appspot.com",
    messagingSenderId: "355413303370",
    appId: "1:355413303370:android:643754eb9cf7e7567486b3",
    measurementId: "G-8BFNLGNS74",
  };

  
  
  const app = initializeApp(firebaseConfig);  // Initialize the app

  // Now you can use modular imports for the Firebase services
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { auth, db, storage }; 
