import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { styles } from '../App';

const AddWasteScreen = () => {
  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      console.log("Camera permission not granted");
      return;
    }
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      console.log("Image Captured:", result.uri);
      // Upload logic here
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Click to Capture Waste</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#4CAF50',
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
      button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      },
});

export default AddWasteScreen;


// import React, { useState, useEffect } from 'react';
// import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';

// const AddWasteScreen = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [wasteCategory, setWasteCategory] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = async () => {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Denied", "Location permission is required to fetch your location.");
//       return;
//     }
//     const loc = await Location.getCurrentPositionAsync({});
//     setLocation(`${loc.coords.latitude}, ${loc.coords.longitude}`);
//   };

//   const pickImage = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Denied", "Camera access is required.");
//       return;
//     }
//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       setImageUri(result.uri);
//     }
//   };

//   const uploadRequest = () => {
//     if (!imageUri || !location || !wasteCategory) {
//       Alert.alert("Missing Fields", "Please fill in all required fields before submitting.");
//       return;
//     }

//     const wasteData = {
//       imageUri,
//       location,
//       wasteCategory,
//       description
//     };

//     console.log("Waste Data:", wasteData);
//     Alert.alert("Success", "Your waste report has been submitted!");
    
//     // Reset form after submission
//     setImageUri(null);
//     setWasteCategory('');
//     setDescription('');
//   };

//   return (
//     <View style={styles.container}>
//       {!imageUri ? (
//         <TouchableOpacity style={styles.button} onPress={pickImage}>
//           <Text style={styles.buttonText}>Click to Capture Waste</Text>
//         </TouchableOpacity>
//       ) : (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />
          
//           <Text style={styles.label}>Location:</Text>
//           <Text style={styles.locationText}>{location || "Fetching location..."}</Text>

//           <Text style={styles.label}>Waste Category:</Text>
//           <Picker
//             selectedValue={wasteCategory}
//             onValueChange={(itemValue) => setWasteCategory(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Select Category" value="" />
//             <Picker.Item label="Wet Waste" value="wet" />
//             <Picker.Item label="Dry Waste" value="dry" />
//             <Picker.Item label="Mixed Waste" value="mixed" />
//           </Picker>

//           <Text style={styles.label}>Description (Optional):</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter description..."
//             value={description}
//             onChangeText={setDescription}
//             multiline
//           />

//           <TouchableOpacity style={styles.uploadButton} onPress={uploadRequest}>
//             <Text style={styles.buttonText}>Upload Request</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 250,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   locationText: {
//     fontSize: 14,
//     marginBottom: 15,
//     color: '#333',
//   },
//   picker: {
//     height: 50,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   input: {
//     height: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     textAlignVertical: 'top',
//   },
//   uploadButton: {
//     backgroundColor: '#FF5733',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
// });

// export default AddWasteScreen;


// import React, { useState, useEffect } from 'react';
// import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';

// const AddWasteScreen = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [wasteCategory, setWasteCategory] = useState('');
//   const [description, setDescription] = useState('');

//   // Add your Google Apps Script URL here
//   const scriptURL = "https://script.google.com/macros/s/AKfycbwSxeQsOmny_xG74qSuIi0CwbKj0BD_VywT648E8bMr1D3sPADOgfHYmM4EzQVBaf3k/exec"; // Replace with your Google Apps Script URL

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestCameraPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert("Permission Denied", "Camera access is required.");
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       setImageUri(result.uri);
//       getLocation();
//     }
//   };

//   const getLocation = async () => {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Denied", "Location permission is required to fetch your location.");
//       return;
//     }
//     const loc = await Location.getCurrentPositionAsync({});
//     setLocation(`${loc.coords.latitude}, ${loc.coords.longitude}`);
//   };

//   const uploadRequest = () => {
//     if (!imageUri || !location || !wasteCategory) {
//       Alert.alert("Missing Fields", "Please fill in all required fields before submitting.");
//       return;
//     }

//     const wasteData = {
//       imageUri,
//       location,
//       wasteCategory,
//       description
//     };

//     // Send data to Google Sheets
//     fetch(scriptURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(wasteData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//         Alert.alert("Success", "Your waste report has been submitted!");
//         // Reset form after submission
//         setImageUri(null);
//         setWasteCategory('');
//         setDescription('');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         Alert.alert("Error", "There was an error submitting your waste report.");
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {!imageUri ? (
//         <TouchableOpacity style={styles.button} onPress={pickImage}>
//           <Text style={styles.buttonText}>Click to Capture Waste</Text>
//         </TouchableOpacity>
//       ) : (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />
          
//           <Text style={styles.label}>Location:</Text>
//           <Text style={styles.locationText}>{location || "Fetching location..."}</Text>

//           <Text style={styles.label}>Waste Category:</Text>
//           <Picker
//             selectedValue={wasteCategory}
//             onValueChange={(itemValue) => setWasteCategory(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Select Category" value="" />
//             <Picker.Item label="Wet Waste" value="wet" />
//             <Picker.Item label="Dry Waste" value="dry" />
//             <Picker.Item label="Mixed Waste" value="mixed" />
//           </Picker>

//           <Text style={styles.label}>Description (Optional):</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter description..."
//             value={description}
//             onChangeText={setDescription}
//             multiline
//           />

//           <TouchableOpacity style={styles.uploadButton} onPress={uploadRequest}>
//             <Text style={styles.buttonText}>Upload Request</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 250,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   locationText: {
//     fontSize: 14,
//     marginBottom: 15,
//     color: '#333',
//   },
//   picker: {
//     height: 50,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   input: {
//     height: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     textAlignVertical: 'top',
//   },
//   uploadButton: {
//     backgroundColor: '#FF5733',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
// });

// export default AddWasteScreen;


// import React, { useState, useEffect } from 'react';
// import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Location from 'expo-location';
// import { Picker } from '@react-native-picker/picker';
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';

// const AddWasteScreen = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [wasteCategory, setWasteCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('user123'); // Replace with actual username (e.g., from auth)
//   const [isUploading, setIsUploading] = useState(false);

//   // Open camera on tab click
//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestCameraPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert("Permission Denied", "Camera access is required.");
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchCameraAsync();
//     if (!result.cancelled) {
//       setImageUri(result.uri);
//       getLocation(); // Fetch location after capturing image
//     }
//   };

//   const getLocation = async () => {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert("Permission Denied", "Location permission is required.");
//       return;
//     }
//     const loc = await Location.getCurrentPositionAsync({});
//     setLocation({
//       latitude: loc.coords.latitude,
//       longitude: loc.coords.longitude,
//     });
//   };

//   const uploadImage = async (uri) => {
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const reference = storage().ref(`waste_images/${filename}`);
//     await reference.putFile(uri);
//     return reference.getDownloadURL();
//   };

//   const uploadRequest = async () => {
//     if (!imageUri || !location || !wasteCategory) {
//       Alert.alert("Missing Fields", "Please fill in all required fields.");
//       return;
//     }

//     try {
//       setIsUploading(true);

//       // 1. Upload image to Firebase Storage
//       const imageUrl = await uploadImage(imageUri);

//       // 2. Save data to Firestore
//       await firestore().collection('waste_reports').add({
//         imageUrl,
//         location: new firestore.GeoPoint(location.latitude, location.longitude),
//         username,
//         category: wasteCategory,
//         description,
//         timestamp: firestore.FieldValue.serverTimestamp(),
//       });

//       Alert.alert("Success", "Waste report uploaded!");
//       resetForm();
//     } catch (error) {
//       Alert.alert("Error", "Failed to upload waste report.");
//       console.error(error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const resetForm = () => {
//     setImageUri(null);
//     setWasteCategory('');
//     setDescription('');
//   };

//   return (
//     <View style={styles.container}>
//       {!imageUri ? (
//         <TouchableOpacity style={styles.button} onPress={pickImage}>
//           <Text style={styles.buttonText}>Click to Capture Waste</Text>
//         </TouchableOpacity>
//       ) : (
//         <>
//           <Image source={{ uri: imageUri }} style={styles.image} />

//           <Text style={styles.label}>Location:</Text>
//           <Text style={styles.locationText}>
//             {location ? `${location.latitude}, ${location.longitude}` : "Fetching location..."}
//           </Text>

//           <Text style={styles.label}>Waste Category:</Text>
//           <Picker
//             selectedValue={wasteCategory}
//             onValueChange={setWasteCategory}
//             style={styles.picker}
//           >
//             <Picker.Item label="Select Category" value="" />
//             <Picker.Item label="Wet Waste" value="wet" />
//             <Picker.Item label="Dry Waste" value="dry" />
//             <Picker.Item label="Mixed Waste" value="mixed" />
//           </Picker>

//           <Text style={styles.label}>Description (Optional):</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter description..."
//             value={description}
//             onChangeText={setDescription}
//             multiline
//           />

//           {isUploading ? (
//             <ActivityIndicator size="large" color="#FF5733" />
//           ) : (
//             <TouchableOpacity style={styles.uploadButton} onPress={uploadRequest}>
//               <Text style={styles.buttonText}>Upload Report</Text>
//             </TouchableOpacity>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// // Reuse the same styles as before
// const styles = StyleSheet.create({  container: {
//   flex: 1,
//   backgroundColor: '#FFFFFF',
//   padding: 20,
//   justifyContent: 'center',
// },
// button: {
//   backgroundColor: '#4CAF50',
//   padding: 15,
//   borderRadius: 10,
//   alignItems: 'center',
// },
// buttonText: {
//   fontSize: 18,
//   fontWeight: 'bold',
//   color: '#fff',
// },
// image: {
//   width: '100%',
//   height: 250,
//   borderRadius: 10,
//   marginBottom: 20,
// },
// label: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   marginBottom: 5,
// },
// locationText: {
//   fontSize: 14,
//   marginBottom: 15,
//   color: '#333',
// },
// picker: {
//   height: 50,
//   backgroundColor: '#f0f0f0',
//   borderRadius: 5,
//   marginBottom: 15,
// },
// input: {
//   height: 80,
//   backgroundColor: '#f0f0f0',
//   borderRadius: 5,
//   padding: 10,
//   marginBottom: 15,
//   textAlignVertical: 'top',
// },
// uploadButton: {
//   backgroundColor: '#FF5733',
//   padding: 15,
//   borderRadius: 10,
//   alignItems: 'center',
// },});

// export default AddWasteScreen;