
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Location from "expo-location";
// import { Picker } from "@react-native-picker/picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFocusEffect } from "@react-navigation/native";
// import axios from "axios";

// const AddWasteScreen = ({ navigation }) => {
//   const [image, setImage] = useState(null);
//   const [location, setLocation] = useState("Fetching location...");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [username, setUsername] = useState("");
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const CLOUDINARY_URL =
//       "https://api.cloudinary.com/v1_1/dwuvaszjg/image/upload"; // Cloudinary URL
//     const CLOUDINARY_API_KEY = "466342631339274"; // Cloudinary API key
//     const CLOUDINARY_API_SECRET = "8RVEQVVgDmhR9HFpyaeec-7P2xA"; // Cloudinary API secret
//     const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET"; // Replace with your Cloudinary upload preset

//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Camera access is needed.");
//       return;
//     }
//     let result = await ImagePicker.launchCameraAsync({ base64: false });
//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//       await AsyncStorage.setItem("waste_image", result.assets[0].uri);
//     }
//   };

//   const fetchLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Required", "Location access is needed.");
//       return;
//     }
//     let locationData = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = locationData.coords;
//     setLatitude(latitude);
//     setLongitude(longitude);
//     let address = await Location.reverseGeocodeAsync(locationData.coords);
//     if (address.length > 0) {
//       setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
//     }
//   };

//   //  Upload image to Cloudinary
//   const uploadImageToCloudinary = async (uri) => {
//     const data = new FormData();
//     data.append("file", {
//       uri,
//       type: "image/jpeg", // Make sure MIME type matches the actual image type
//       name: "waste_image.jpg",
//     });
//     data.append("upload_preset", "waste_report_preset"); // Use the preset name you created

//     try {
//       const response = await axios.post(CLOUDINARY_URL, data, {
//         headers: {
//           "Content-Type": "multipart/form-data", // This ensures the data is sent properly
//         },
//       });

//       console.log("Cloudinary Upload Response:", response.data); // Log to check the response

//       if (response.data.secure_url) {
//         return response.data.secure_url; // Ensure the URL is returned
//       } else {
//         throw new Error("Failed to retrieve image URL");
//       }
//     } catch (error) {
//       console.error("Error uploading image to Cloudinary:", error);
//       Alert.alert("Error", "Failed to upload image");
//     }
//   };

//   const fetchUsername = async () => {
//     const storedUsername = await AsyncStorage.getItem("username");
//     setUsername(storedUsername || "Guest User");
//   };

//   const handleSubmit = async () => {
//         if (!image || !category || !latitude || !longitude) {
//           Alert.alert(
//             "Incomplete Data",
//             "Please provide an image, select a category, and allow location access."
//           );
//           return;
//         }
    
//         try {
//           const cloudinaryImageUrl = await uploadImageToCloudinary(image);
//           console.log("Image URL:", cloudinaryImageUrl); // Check the URL
    
//           const wasteReport = {
//             imageUrl: cloudinaryImageUrl,
//             location,
//             category,
//             description,
//             username,
//             latitude,
//             longitude,
//             timestamp: new Date().toISOString(),
//           };
    
//           console.log("Waste Report Data to Save:", wasteReport);
    
//           const wasteReports =
//             JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//           wasteReports.push(wasteReport);
//           await AsyncStorage.setItem("waste_reports", JSON.stringify(wasteReports));
    
//           Alert.alert("Success", "Waste data added successfully!");
//           setImage(null);
//           setCategory("");
//           setDescription("");
//         } catch (error) {
//           console.error("Error submitting waste data:", error);
//           Alert.alert("Error", "Failed to save waste data.");
//         }
//       };

//   useFocusEffect(
//     React.useCallback(() => {
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
//       <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
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
//       <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Maps")}>
//         <Text  style={styles.buttonText1}>View Map</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f4f4",
//   },
//   image: {
//     width: 250,
//     height: 250,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   picker: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 20,
//     elevation: 3,
//   },
//   input: {
//     width: "100%",
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#DDFEB3",
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 12,
//     marginBottom: 10,
//     elevation: 3,
//     width: '70%'
//   },
//   buttonText: {
//     color: "#000",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: 'center'
//   },
//   button1: {
//     backgroundColor: "#FFBCE4",
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 12,
//     marginBottom: 10,
//     elevation: 3,
//     width: '70%'
//   },
//   buttonText1: {
//     color: "#000",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: 'center'
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
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

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

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Location access is needed.");
      return;
    }
    let locationData = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = locationData.coords;
    setLatitude(latitude);
    setLongitude(longitude);
    let address = await Location.reverseGeocodeAsync(locationData.coords);
    if (address.length > 0) {
      setLocation(`${address[0].street}, ${address[0].city}, ${address[0].region}`);
    }
  };

  //  Upload image to Cloudinary
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

  const fetchUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem("username");
      setUsername(storedUsername || "Guest User");
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

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

      useFocusEffect(
        React.useCallback(() => {
          openCamera();
          fetchLocation();
          fetchUsername();  // Fetch the username here
        }, [])
      );
      

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.label}>Location: {location}</Text>
      <Text style={styles.label}>User: {username}</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
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
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Maps")}>
        <Text  style={styles.buttonText1}>View Map</Text>
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
    backgroundColor: "#f4f4f4",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  picker: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDFEB3",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
    width: '70%'
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  },
  button1: {
    backgroundColor: "#FFBCE4",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
    width: '70%'
  },
  buttonText1: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  },
});

export default AddWasteScreen;
