// // firebaseConfig.js
// import { initializeApp } from 'firebase/app'; // Modular SDK
// import { getAuth } from 'firebase/auth';      // Import auth from modular SDK
// import { getFirestore } from 'firebase/firestore'; // Import Firestore from modular SDK
// import { getStorage } from 'firebase/storage'; // Import storage from modular SDK



// const firebaseConfig = {
//     apiKey: "AIzaSyDEbTMkIOWxrerJXHVr1sNr8neWoZB6eIs",
//     authDomain: "wastemanagementapp-5c715.firebaseapp.com",
//     projectId: "wastemanagementapp-5c715",
//     storageBucket: "wastemanagementapp-5c715.appspot.com",
//     messagingSenderId: "355413303370",
//     appId: "1:355413303370:android:643754eb9cf7e7567486b3",
//     measurementId: "G-8BFNLGNS74",
//   };

  
  
//   const app = initializeApp(firebaseConfig);  // Initialize the app

//   // Now you can use modular imports for the Firebase services
//   const auth = getAuth(app);
//   const db = getFirestore(app);
//   const storage = getStorage(app);
  
//   export { auth, db, storage }; 


// // firebaseConfig.js
// import { initializeApp, getApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyDEbTMkIOWxrerJXHVr1sNr8neWoZB6eIs",
//   authDomain: "wastemanagementapp-5c715.firebaseapp.com",
//   projectId: "wastemanagementapp-5c715",
//   storageBucket: "wastemanagementapp-5c715.appspot.com",
//   messagingSenderId: "355413303370",
//   appId: "1:355413303370:android:643754eb9cf7e7567486b3",
//   measurementId: "G-8BFNLGNS74",
// };

// // Initialize Firebase only if it hasn't been initialized already
// let app;
// try {
//   app = getApp(); // Get the default app if it exists
// } catch (e) {
//   app = initializeApp(firebaseConfig); // Initialize if no app exists
// }

// // Export Firebase services initialized with the app
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, db, storage };

// firebaseConfig.js
import { initializeApp, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; // Correct import

const firebaseConfig = {
  apiKey: "AIzaSyDEbTMkIOWxrerJXHVr1sNr8neWoZB6eIs",
  authDomain: "wastemanagementapp-5c715.firebaseapp.com",
  projectId: "wastemanagementapp-5c715",
  storageBucket: "wastemanagementapp-5c715.appspot.com",
  messagingSenderId: "355413303370",
  appId: "1:355413303370:android:643754eb9cf7e7567486b3",
  measurementId: "G-8BFNLGNS74",
};

// Initialize Firebase only once
let app;
try {
  app = getApp(); // Get existing app
} catch (e) {
  app = initializeApp(firebaseConfig); // Initialize if none exists
}

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage), // Add AsyncStorage persistence
});

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
