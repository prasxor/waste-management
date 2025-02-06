import React, { useState } from "react";
import { View, Button, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload"; // Replace with your Cloudinary URL
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET"; // Replace with your preset

export default function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [localUri, setLocalUri] = useState(null);
  const [wasteData, setWasteData] = useState(null);

  // Function to upload image to Cloudinary
  const uploadImageToCloudinary = async (uri) => {
    const formData = new FormData();
    formData.append("file", {
      uri,
      type: "image/jpeg", // Ensure correct MIME type
      name: "image.jpg", // You can modify this if needed
    });
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.secure_url; // Returns the Cloudinary URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
      return null;
    }
  };

  // Function to pick image from gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const cloudinaryUrl = await uploadImageToCloudinary(result.uri);
      if (cloudinaryUrl) {
        setImageUrl(cloudinaryUrl);
        setLocalUri(result.uri);
        saveDataToLocal(cloudinaryUrl, result.uri);
      }
    }
  };

  // Save the data locally
  const saveDataToLocal = (cloudinaryUrl, localUri) => {
    const wasteData = {
      category: "Wet", // Example category
      description: "Jahshs", // Example description
      imageUrl: cloudinaryUrl, // Cloudinary URL
      localUri: localUri, // Local URI (optional)
      latitude: 17.2138098,
      longitude: 78.3896404,
      location: "Chinnagolkonda Road, Chinna Golconda, Telangana",
      timestamp: new Date().toISOString(),
      username: "Guest User",
    };

    setWasteData(wasteData);
    console.log("Saved Data:", wasteData); // Optionally save to AsyncStorage or state management
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Pick Image" onPress={pickImage} />
      {imageUrl && (
        <View style={{ marginTop: 20 }}>
          <Text>Uploaded Image:</Text>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      )}
      {wasteData && (
        <View style={{ marginTop: 20 }}>
          <Text>Waste Data:</Text>
          <Text>Category: {wasteData.category}</Text>
          <Text>Description: {wasteData.description}</Text>
          <Text>Location: {wasteData.location}</Text>
          <Text>Username: {wasteData.username}</Text>
        </View>
      )}
    </View>
  );
}
