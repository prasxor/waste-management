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