// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// // import { styles } from '../App';

// const AddWasteScreen = () => {
//   const pickImage = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       console.log("Camera permission not granted");
//       return;
//     }
//     let result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       console.log("Image Captured:", result.uri);
//       // Upload logic here
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={pickImage}>
//         <Text style={styles.buttonText}>Click to Capture Waste</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//       },
//       header: {
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#4CAF50',
//       },
//       headerText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#fff',
//       },
//       button: {
//         backgroundColor: '#4CAF50',
//         padding: 15,
//         borderRadius: 10,
//         margin: 20,
//         alignItems: 'center',
//       },
//       buttonText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//       },
// });

// export default AddWasteScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { app } from '../config/google-services.json'; // Import Firebase configuration

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState(''); // Assume it's stored in AsyncStorage or Firebase Auth

//   const storage = getStorage(app);
//   const db = getFirestore(app);
//   const auth = getAuth(app);

//   useEffect(() => {
//     openCamera(); // Open camera when the screen loads
//     fetchLocation(); // Get user's location
//     fetchUsername(); // Get username stored during first app setup
//   }, []);

//   // Open Camera Automatically
//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Camera access is needed.');
//       return;
//     }
//     let result = await ImagePicker.launchCameraAsync({ base64: false });
//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   // Fetch User's Location
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Location access is needed.');
//       return;
//     }
//     let locationData = await Location.getCurrentPositionAsync({});
//     setLocation({
//       latitude: locationData.coords.latitude,
//       longitude: locationData.coords.longitude
//     });
//   };

//   // Fetch Username (Assume stored in AsyncStorage or Firebase Auth)
//   const fetchUsername = async () => {
//     if (auth.currentUser) {
//       setUsername(auth.currentUser.displayName || 'Anonymous');
//     } else {
//       setUsername('Guest User'); // Fallback if no auth system
//     }
//   };

//   // Upload Image to Firebase Storage
//   const uploadImage = async (uri) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const filename = `waste_images/${Date.now()}.jpg`;
//       const storageRef = ref(storage, filename);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error('Image Upload Error:', error);
//       return null;
//     }
//   };

//   // Save Waste Data to Firestore
//   const handleSubmit = async () => {
//     if (!image || !category) {
//       Alert.alert('Incomplete Data', 'Please provide an image and select a category.');
//       return;
//     }
//     try {
//       const imageUrl = await uploadImage(image);
//       await addDoc(collection(db, 'waste_reports'), {
//         imageUrl,
//         latitude: location.latitude,
//         longitude: location.longitude,
//         category,
//         description,
//         username,
//         timestamp: new Date().toISOString()
//       });
//       Alert.alert('Success', 'Waste data added successfully!');
//       setImage(null); // Reset form after submission
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       console.error('Firestore Error:', error);
//       Alert.alert('Error', 'Failed to save waste data.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {image && <Image source={{ uri: image }} style={styles.image} />}
      
//       <Text style={styles.label}>Latitude: {location.latitude}</Text>
//       <Text style={styles.label}>Longitude: {location.longitude}</Text>
//       <Text style={styles.label}>User: {username}</Text>

//       <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
//         <Picker.Item label="Select Category" value="" />
//         <Picker.Item label="Dry" value="Dry" />
//         <Picker.Item label="Wet" value="Wet" />
//         <Picker.Item label="Mix" value="Mix" />
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Optional Description"
//         value={description}
//         onChangeText={setDescription}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Waste Report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#f8f8f8',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#f8f8f8',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddWasteScreen;




// working

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import {AsyncStorage} from 'react-native';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { app } from '../config/google-services.json'; // Ensure correct Firebase import

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState('Fetching location...');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');

//   const storage = getStorage(app);
//   const db = getFirestore(app);
//   const auth = getAuth(app);

//   useEffect(() => {
//     openCamera();
//     fetchLocation();
//     fetchUsername();
//   }, []);

//   // Open Camera Automatically and Store Image in Local Storage
//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Camera access is needed.');
//       return;
//     }
//     let result = await ImagePicker.launchCameraAsync({ base64: false });
//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//       await AsyncStorage.setItem('waste_image', result.assets[0].uri);
//     }
//   };

//   // Fetch User's Live Location
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Location access is needed.');
//       return;
//     }
//     let locationData = await Location.getCurrentPositionAsync({});
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   // Fetch Username from AsyncStorage (or Firebase Auth)
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else if (auth.currentUser) {
//       setUsername(auth.currentUser.displayName || 'Anonymous');
//     } else {
//       setUsername('Guest User');
//     }
//   };

//   // Upload Image to Firebase Storage
//   const uploadImage = async (uri) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const filename = `waste_images/${Date.now()}.jpg`;
//       const storageRef = ref(storage, filename);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error('Image Upload Error:', error);
//       return null;
//     }
//   };

//   // Save Waste Data to Firestore
//   const handleSubmit = async () => {
//     if (!image || !category) {
//       Alert.alert('Incomplete Data', 'Please provide an image and select a category.');
//       return;
//     }
//     try {
//       const imageUrl = await uploadImage(image);
//       await addDoc(collection(db, 'waste_reports'), {
//         imageUrl,
//         location,
//         category,
//         description,
//         username,
//         timestamp: new Date().toISOString()
//       });
//       Alert.alert('Success', 'Waste data added successfully!');
//       setImage(null);
//       setCategory('');
//       setDescription('');
//       await AsyncStorage.removeItem('waste_image'); // Clear local storage
//     } catch (error) {
//       console.error('Firestore Error:', error);
//       Alert.alert('Error', 'Failed to save waste data.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {image && <Image source={{ uri: image }} style={styles.image} />}

//       <Text style={styles.label}>Location: {location}</Text>
//       <Text style={styles.label}>User: {username}</Text>

//       <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
//         <Picker.Item label="Select Category" value="" />
//         <Picker.Item label="Dry" value="Dry" />
//         <Picker.Item label="Wet" value="Wet" />
//         <Picker.Item label="Mix" value="Mix" />
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Optional Description"
//         value={description}
//         onChangeText={setDescription}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Waste Report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#f8f8f8',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#f8f8f8',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddWasteScreen;



// working but not uploading firebase with error of default its already exist 
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Location from "expo-location";
// import { Picker } from "@react-native-picker/picker";
// import {AsyncStorage} from 'react-native';
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import firebaseConfig from "../config/firebaseConfig";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
// const db = getFirestore(app);
// const auth = getAuth(app);

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState("Fetching location...");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     openCamera();
//     fetchLocation();
//     fetchUsername();
//   }, []);

//   // Open Camera Automatically and Store Image Locally
//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Camera access is needed.");
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 0.8,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       setImage(result.assets[0].uri);
//       await AsyncStorage.setItem("waste_image", result.assets[0].uri);
//     }
//   };

//   // Fetch User's Live Location
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Location access is needed.");
//       return;
//     }
//     let locationData = await Location.getCurrentPositionAsync({});
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   // Fetch Username from AsyncStorage or Firebase Auth
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else if (auth.currentUser) {
//       setUsername(auth.currentUser.displayName || "Anonymous");
//     } else {
//       setUsername("Guest User");
//     }
//   };

//   // Upload Image to Firebase Storage
//   const uploadImage = async (uri) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob(); // Convert image to blob
//       const filename = `waste_images/${Date.now()}.jpg`;

//       const storageRef = ref(storage, filename);
//       await uploadBytes(storageRef, blob);

//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (error) {
//       console.error("Firebase Upload Error:", error);
//       Alert.alert("Upload Error", "Failed to upload image. Check Firebase Storage rules.");
//       return null;
//     }
//   };

//   // Save Waste Data to Firestore
//   const handleSubmit = async () => {
//     if (!image || !category) {
//       Alert.alert("Incomplete Data", "Please provide an image and select a category.");
//       return;
//     }

//     try {
//       const imageUrl = await uploadImage(image);
//       if (!imageUrl) return;

//       await addDoc(collection(db, "waste_reports"), {
//         imageUrl,
//         location,
//         category,
//         description,
//         username,
//         timestamp: new Date().toISOString(),
//       });

//       Alert.alert("Success", "Waste data added successfully!");
//       setImage(null);
//       setCategory("");
//       setDescription("");
//       await AsyncStorage.removeItem("waste_image"); // Clear local storage
//     } catch (error) {
//       console.error("Firestore Error:", error);
//       Alert.alert("Error", "Failed to save waste data.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {image && <Image source={{ uri: image }} style={styles.image} />}

//       <Text style={styles.label}>Location: {location}</Text>
//       <Text style={styles.label}>User: {username}</Text>

//       <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
//         <Picker.Item label="Select Category" value="" />
//         <Picker.Item label="Dry" value="Dry" />
//         <Picker.Item label="Wet" value="Wet" />
//         <Picker.Item label="Mix" value="Mix" />
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Optional Description"
//         value={description}
//         onChangeText={setDescription}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Waste Report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100%",
//     height: 250,
//     resizeMode: "cover",
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   picker: {
//     height: 50,
//     width: "100%",
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#f8f8f8",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: "#f8f8f8",
//   },
//   button: {
//     backgroundColor: "#4CAF50",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default AddWasteScreen;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Location from "expo-location";
// import { Picker } from "@react-native-picker/picker";
// import { AsyncStorage } from 'react-native';
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getAuth, getApps, initializeApp } from "firebase/app";  // Add getApps and initializeApp

// import firebaseConfig from "../config/firebaseConfig";

// // Initialize Firebase only if it hasn't been initialized yet
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]; // Ensure Firebase is initialized only once

// const storage = getStorage(app);
// const db = getFirestore(app);
// const auth = getAuth(app);

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState("Fetching location...");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     openCamera();
//     fetchLocation();
//     fetchUsername();
//   }, []);

//   // Open Camera Automatically and Store Image Locally
//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Camera access is needed.");
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 0.8,
//     });

//     if (!result.canceled && result.assets.length > 0) {
//       setImage(result.assets[0].uri);
//       await AsyncStorage.setItem("waste_image", result.assets[0].uri);
//     }
//   };

//   // Fetch User's Live Location
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Location access is needed.");
//       return;
//     }
//     let locationData = await Location.getCurrentPositionAsync({});
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   // Fetch Username from AsyncStorage or Firebase Auth
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else if (auth.currentUser) {
//       setUsername(auth.currentUser.displayName || "Anonymous");
//     } else {
//       setUsername("Guest User");
//     }
//   };

//   // Upload Image to Firebase Storage
//   const uploadImage = async (uri) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob(); // Convert image to blob
//       const filename = `waste_images/${Date.now()}.jpg`;

//       const storageRef = ref(storage, filename);
//       await uploadBytes(storageRef, blob);

//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (error) {
//       console.error("Firebase Upload Error:", error);
//       Alert.alert("Upload Error", "Failed to upload image. Check Firebase Storage rules.");
//       return null;
//     }
//   };

//   // Save Waste Data to Firestore
//   const handleSubmit = async () => {
//     if (!image || !category) {
//       Alert.alert("Incomplete Data", "Please provide an image and select a category.");
//       return;
//     }

//     try {
//       const imageUrl = await uploadImage(image);
//       if (!imageUrl) return;

//       await addDoc(collection(db, "waste_reports"), {
//         imageUrl,
//         location,
//         category,
//         description,
//         username,
//         timestamp: new Date().toISOString(),
//       });

//       Alert.alert("Success", "Waste data added successfully!");
//       setImage(null);
//       setCategory("");
//       setDescription("");
//       await AsyncStorage.removeItem("waste_image"); // Clear local storage
//     } catch (error) {
//       console.error("Firestore Error:", error);
//       Alert.alert("Error", "Failed to save waste data.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {image && <Image source={{ uri: image }} style={styles.image} />}

//       <Text style={styles.label}>Location: {location}</Text>
//       <Text style={styles.label}>User: {username}</Text>

//       <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
//         <Picker.Item label="Select Category" value="" />
//         <Picker.Item label="Dry" value="Dry" />
//         <Picker.Item label="Wet" value="Wet" />
//         <Picker.Item label="Mix" value="Mix" />
//       </Picker>

//       <TextInput
//         style={styles.input}
//         placeholder="Optional Description"
//         value={description}
//         onChangeText={setDescription}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Waste Report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100%",
//     height: 250,
//     resizeMode: "cover",
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   picker: {
//     height: 50,
//     width: "100%",
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     backgroundColor: "#f8f8f8",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: "#f8f8f8",
//   },
//   button: {
//     backgroundColor: "#4CAF50",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default AddWasteScreen;


import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";
import { AsyncStorage } from "react-native";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Correct import
import app from "../config/firebaseConfig";  // Correct import

const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

const AddWasteScreen = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("Fetching location...");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    openCamera();
    fetchLocation();
    fetchUsername();
  }, []);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Camera access is needed.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      await AsyncStorage.setItem("waste_image", result.assets[0].uri);
    }
  };

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Location access is needed.");
      return;
    }
    let locationData = await Location.getCurrentPositionAsync({});
    let address = await Location.reverseGeocodeAsync(locationData.coords);
    if (address.length > 0) {
      setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
    }
  };

  const fetchUsername = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else if (auth.currentUser) {
      setUsername(auth.currentUser.displayName || "Anonymous");
    } else {
      setUsername("Guest User");
    }
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = `waste_images/${Date.now()}.jpg`;

      const storageRef = ref(storage, filename);
      await uploadBytes(storageRef, blob);

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Firebase Upload Error:", error);
      Alert.alert("Upload Error", "Failed to upload image. Check Firebase Storage rules.");
      return null;
    }
  };

  const handleSubmit = async () => {
    if (!image || !category) {
      Alert.alert("Incomplete Data", "Please provide an image and select a category.");
      return;
    }

    try {
      const imageUrl = await uploadImage(image);
      if (!imageUrl) return;

      await addDoc(collection(db, "waste_reports"), {
        imageUrl,
        location,
        category,
        description,
        username,
        timestamp: new Date().toISOString(),
      });

      Alert.alert("Success", "Waste data added successfully!");
      setImage(null);
      setCategory("");
      setDescription("");
      await AsyncStorage.removeItem("waste_image");
    } catch (error) {
      console.error("Firestore Error:", error);
      Alert.alert("Error", "Failed to save waste data.");
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Text style={styles.label}>Location: {location}</Text>
      <Text style={styles.label}>User: {username}</Text>

      <Picker selectedValue={category} onValueChange={(value) => setCategory(value)} style={styles.picker}>
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Dry" value="Dry" />
        <Picker.Item label="Wet" value="Wet" />
        <Picker.Item label="Mix" value="Mix" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Optional Description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Waste Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddWasteScreen;
