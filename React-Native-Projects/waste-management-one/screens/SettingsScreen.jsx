import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  TextInput, Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // User profile state
  const [name, setName] = useState("JeevEco User");
  const [email, setEmail] = useState("User@email.com");

  const saveProfile = async () => {
    try {
      await AsyncStorage.setItem("username", name);
      setIsEditing(false);
      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      Alert.alert("Error", "Failed to update profile.");
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkBackground]}>
      {/* Profile Card */}
      <View style={[styles.profileCard, darkMode && styles.darkCard]}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1591621177130-38f1753dd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW50JTIwaW4lMjBoYW5kfGVufDB8fDB8fHww" }} // Replace with actual profile image
          style={styles.profileImage}
        />

        <View style={styles.profileInfo}>
          {isEditing ? (
            <>
              <TextInput
                style={[styles.input, darkMode && styles.darkInput]}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={[styles.input, darkMode && styles.darkInput]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </>
          ) : (
            <View >
              <Text style={[styles.profileName, darkMode && styles.darkText]}>
                {name}
              </Text>
              <Text style={[styles.profileEmail, darkMode && styles.darkText]}>
                {email}
              </Text>
            </View>
          )}
        </View>

        {isEditing ? (
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.saveButton, darkMode && styles.darkButton]}
              onPress={saveProfile}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.cancelButton, darkMode && styles.darkButton]}
              onPress={() => setIsEditing(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.settingRow}>
        <Text style={[styles.settingText, darkMode && styles.darkText]}>
          Dark Mode
        </Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* App Version */}
      <View style={styles.settingRow}>
        <Text style={[styles.settingText, darkMode && styles.darkText]}>
          App Version
        </Text>
        <Text style={[styles.settingText, darkMode && styles.darkText]}>
          v1.0.0
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  darkCard: {
    backgroundColor: "#333",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#4CAF50",
    fontSize: 16,
    marginBottom: 5,
  },
  darkInput: {
    color: "#fff",
    borderBottomColor: "#76FF03",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "column",
    gap: 5,
    textAlign: 'center'

  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  darkButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center'
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  settingText: {
    fontSize: 16,
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
  profileEdit: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    borderWidth: 1





  }

});

export default SettingsScreen;
