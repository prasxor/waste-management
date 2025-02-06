// working

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState('Fetching location...');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');

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

//   // Fetch Username from AsyncStorage
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else {
//       setUsername('Guest User');
//     }
//   };

//   // Handle Submit (no Firebase-related logic anymore)
//   const handleSubmit = async () => {
//     if (!image || !category) {
//       Alert.alert('Incomplete Data', 'Please provide an image and select a category.');
//       return;
//     }
//     try {
//       // Simulate the data submission, as there's no Firebase to save it to
//       const wasteReport = {
//         imageUrl: image,
//         location,
//         category,
//         description,
//         username,
//         timestamp: new Date().toISOString(),
//       };
//       console.log('Waste Report Submitted:', wasteReport);
//       Alert.alert('Success', 'Waste data added successfully!');

//       // Reset state and clear local storage
//       setImage(null);
//       setCategory('');
//       setDescription('');
//       await AsyncStorage.removeItem('waste_image');
//     } catch (error) {
//       console.error('Error submitting waste data:', error);
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

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState('Fetching location...');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');

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

//   // Fetch Username from AsyncStorage
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else {
//       setUsername('Guest User');
//     }
//   };

//   // Handle Submit (save the waste data to local storage)

//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const handleSubmit = async () => {
//     if (!image || !category || !latitude || !longitude) {
//       Alert.alert('Incomplete Data', 'Please provide an image, select a category, and allow location access.');
//       return;
//     }
//     try {
//       const wasteReport = {
//         imageUrl: image,
//         location,
//         category,
//         description,
//         username,
//         latitude,  // Store latitude
//         longitude, // Store longitude
//         timestamp: new Date().toISOString(),
//       };

//       // Log the data being saved
//       console.log('Waste Report Data to Save:', wasteReport);

//       // Save the waste report to AsyncStorage
//       const wasteReports = JSON.parse(await AsyncStorage.getItem('waste_reports')) || [];
//       wasteReports.push(wasteReport);
//       await AsyncStorage.setItem('waste_reports', JSON.stringify(wasteReports));

//       Alert.alert('Success', 'Waste data added successfully!');
//       // Reset state and clear local storage
//       setImage(null);
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error submitting waste data:', error);
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
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   picker: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#ccc',
//   },
//   button: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
// });

// export default AddWasteScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AddWasteScreen = () => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState('Fetching location...');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

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

//   // Fetch User's Live Location (latitude, longitude) and then reverse geocode it
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Location access is needed.');
//       return;
//     }

//     // Get the current position (latitude and longitude)
//     let locationData = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = locationData.coords;
//     setLatitude(latitude);
//     setLongitude(longitude);

//     // Use reverse geocoding to get the location name from latitude and longitude
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   // Fetch Username from AsyncStorage
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else {
//       setUsername('Guest User');
//     }
//   };

//   // Handle Submit (save the waste data to local storage)
//   const handleSubmit = async () => {
//     if (!image || !category || !latitude || !longitude) {
//       Alert.alert('Incomplete Data', 'Please provide an image, select a category, and allow location access.');
//       return;
//     }
//     try {
//       const wasteReport = {
//         imageUrl: image,
//         location,
//         category,
//         description,
//         username,
//         latitude,  // Store latitude
//         longitude, // Store longitude
//         timestamp: new Date().toISOString(),
//       };

//       // Log the data being saved
//       console.log('Waste Report Data to Save:', wasteReport);

//       // Save the waste report to AsyncStorage
//       const wasteReports = JSON.parse(await AsyncStorage.getItem('waste_reports')) || [];
//       wasteReports.push(wasteReport);
//       await AsyncStorage.setItem('waste_reports', JSON.stringify(wasteReports));

//       Alert.alert('Success', 'Waste data added successfully!');
//       // Reset state and clear local storage
//       setImage(null);
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error submitting waste data:', error);
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
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   picker: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#ccc',
//   },
//   button: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
// });

// export default AddWasteScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFocusEffect } from '@react-navigation/native'; // Import the hook

// const AddWasteScreen = ({ navigation }) => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState('Fetching location...');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

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

//   // Fetch User's Live Location (latitude, longitude) and then reverse geocode it
//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Required', 'Location access is needed.');
//       return;
//     }

//     // Get the current position (latitude and longitude)
//     let locationData = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = locationData.coords;
//     setLatitude(latitude);
//     setLongitude(longitude);

//     // Use reverse geocoding to get the location name from latitude and longitude
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   // Fetch Username from AsyncStorage
//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     } else {
//       setUsername('Guest User');
//     }
//   };

//   // Handle Submit (save the waste data to local storage)
//   const handleSubmit = async () => {
//     if (!image || !category || !latitude || !longitude) {
//       Alert.alert('Incomplete Data', 'Please provide an image, select a category, and allow location access.');
//       return;
//     }
//     try {
//       const wasteReport = {
//         imageUrl: image,
//         location,
//         category,
//         description,
//         username,
//         latitude,  // Store latitude
//         longitude, // Store longitude
//         timestamp: new Date().toISOString(),
//       };

//       // Log the data being saved
//       console.log('Waste Report Data to Save:', wasteReport);

//       // Save the waste report to AsyncStorage
//       const wasteReports = JSON.parse(await AsyncStorage.getItem('waste_reports')) || [];
//       wasteReports.push(wasteReport);
//       await AsyncStorage.setItem('waste_reports', JSON.stringify(wasteReports));

//       Alert.alert('Success', 'Waste data added successfully!');
//       // Reset state and clear local storage
//       setImage(null);
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error submitting waste data:', error);
//       Alert.alert('Error', 'Failed to save waste data.');
//     }
//   };

//   // Fetch data when the screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       // Reset everything and fetch data when this screen is focused
//       openCamera();
//       fetchLocation();
//       fetchUsername();
//     }, [])
//   );

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

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
//         <Text style={styles.buttonText}>View Waste Locations on Map</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   picker: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#ccc',
//   },
//   button: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
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
  Alert,
  StyleSheet
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native"; // Import the hook
import axios from "axios"; // For making HTTP requests

const AddWasteScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("Fetching location...");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dwuvaszjg/image/upload"; // Cloudinary URL
  const CLOUDINARY_API_KEY = "466342631339274"; // Cloudinary API key
  const CLOUDINARY_API_SECRET = "8RVEQVVgDmhR9HFpyaeec-7P2xA"; // Cloudinary API secret
  const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET"; // Replace with your Cloudinary upload preset

  // Open Camera Automatically and Store Image in Local Storage
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Camera access is needed.");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({ base64: false });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await AsyncStorage.setItem("waste_image", result.assets[0].uri);
    }
  };

  // Fetch User's Live Location (latitude, longitude) and then reverse geocode it
  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Location access is needed.");
      return;
    }

    // Get the current position (latitude and longitude)
    let locationData = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = locationData.coords;
    setLatitude(latitude);
    setLongitude(longitude);

    // Use reverse geocoding to get the location name from latitude and longitude
    let address = await Location.reverseGeocodeAsync(locationData.coords);
    if (address.length > 0) {
      setLocation(
        `${address[0].street}, ${address[0].city}, ${address[0].region}`
      );
    }
  };

  // Fetch Username from AsyncStorage
  const fetchUsername = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername("Guest User");
    }
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (uri) => {
    const data = new FormData();
    data.append("file", {
      uri,
      type: "image/jpeg", // Make sure MIME type matches the actual image type
      name: "waste_image.jpg",
    });
    data.append("upload_preset", "waste_report_preset"); // Use the preset name you created
  
    try {
      const response = await axios.post(CLOUDINARY_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data", // This ensures the data is sent properly
        },
      });
  
      console.log("Cloudinary Upload Response:", response.data); // Log to check the response
  
      if (response.data.secure_url) {
        return response.data.secure_url; // Ensure the URL is returned
      } else {
        throw new Error("Failed to retrieve image URL");
      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      Alert.alert("Error", "Failed to upload image");
    }
  };
  
  
  

  // Handle Submit (save the waste data to local storage)
  const handleSubmit = async () => {
    if (!image || !category || !latitude || !longitude) {
      Alert.alert(
        "Incomplete Data",
        "Please provide an image, select a category, and allow location access."
      );
      return;
    }
  
    try {
      const cloudinaryImageUrl = await uploadImageToCloudinary(image);
      console.log("Image URL:", cloudinaryImageUrl); // Check the URL
  
      const wasteReport = {
        imageUrl: cloudinaryImageUrl,
        location,
        category,
        description,
        username,
        latitude,
        longitude,
        timestamp: new Date().toISOString(),
      };
  
      console.log("Waste Report Data to Save:", wasteReport);
  
      const wasteReports =
        JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
      wasteReports.push(wasteReport);
      await AsyncStorage.setItem("waste_reports", JSON.stringify(wasteReports));
  
      Alert.alert("Success", "Waste data added successfully!");
      setImage(null);
      setCategory("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting waste data:", error);
      Alert.alert("Error", "Failed to save waste data.");
    }
  };
  

  // Fetch data when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Reset everything and fetch data when this screen is focused
      openCamera();
      fetchLocation();
      fetchUsername();
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
      )}
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Location: {location}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>User: {username}</Text>

      <Picker
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
        style={{ width: "100%", marginBottom: 20 }}
      >
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Dry" value="Dry" />
        <Picker.Item label="Wet" value="Wet" />
        <Picker.Item label="Mix" value="Mix" />
      </Picker>

      <TextInput
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: "#ccc",
        }}
        placeholder="Optional Description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "#FFF", fontSize: 16 }}>Submit Waste Report</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text style={{ color: "#FFF", fontSize: 16 }}>
          View Waste Locations on Map
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default AddWasteScreen;
