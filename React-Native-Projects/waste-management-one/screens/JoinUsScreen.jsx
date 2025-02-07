import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-remix-icon";

const Stack = createStackNavigator();

const BasicInfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleNext = () => {
    if (!formData.fullName || !formData.email || !formData.city) {
      alert("Please fill all required fields.");
      return;
    }
    navigation.navigate("RoleAvailability", { formData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>A Few Details About You</Text>
      <View style={styles.miniContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <TextInput
          placeholder="Phone Number (optional)"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />
        <TextInput
          placeholder="City"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, city: text })}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RoleAvailability", { formData })}
      >
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const RoleAvailabilityScreen = ({ route }) => {
  const navigation = useNavigation();
  const { formData } = route.params;
  const [roles, setRoles] = useState([]);
  const [availability, setAvailability] = useState([]);

  // Toggle selection function
  const toggleSelection = (item, setState, state) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item)); // Remove if already selected
    } else {
      setState([...state, item]); // Add if not selected
    }
  };

  // Roles data
  const roleOptions = [
    "Volunteer For Cleanup Drives",
    "Waste Collection & Segregation",
    "Awareness & Education Campaigns",
    "Reporting Waste Issues",
  ];

  // Availability data
  const availabilityOptions = ["Weekdays", "Weekends", "Flexible"];

  const handleNext = () => {
    navigation.navigate("Agreement", {
      formData: { ...formData, roles, availability },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
        <Text style={styles.header1}>Role Preference</Text>
        {roleOptions.map((role, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() => toggleSelection(role, setRoles, roles)}
          >
            <Icon
              name={
                roles.includes(role)
                  ? "ri-checkbox-fill"
                  : "ri-checkbox-blank-line"
              }
              size={24}
              color={roles.includes(role) ? "black" : "black"}
            />
            <Text style={styles.optionText}>{role}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.SubContainer}>
        <Text style={styles.header1}>Availability</Text>
        {availabilityOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() =>
              toggleSelection(option, setAvailability, availability)
            }
          >
            <Icon
              name={
                availability.includes(option)
                  ? "ri-checkbox-fill"
                  : "ri-checkbox-blank-line"
              }
              size={24}
              color={availability.includes(option) ? "black" : "black"}
            />
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const AgreementScreen = ({ route }) => {
  const { formData, setFormData } = route.params; // Ensure setFormData is passed
  const [agreed, setAgreed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added state for submission status

  // const handleSubmit = async () => {
  //   if (!formData.fullName || !formData.email || !formData.city) {
  //     alert("Please fill all required fields before submitting.");
  //     return;
  //   }

  //   if (!agreed) {
  //     alert("You must agree to the Terms of Use before submitting.");
  //     return;
  //   }

  //   const googleSheetUrl =
  //     "https://script.google.com/macros/s/AKfycbw2ADla59c4mF-txk7Wz1nSAAXslrOldNhWciXuBDHy-Y6ueyGT5oCd6y9cg-lvskVk/exec";

  //   try {
  //     setIsSubmitting(true);

  //     await axios.post(googleSheetUrl, formData, {
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     alert("Form Submitted Successfully!");

  //     // Reset form if setFormData is available
  //     if (setFormData) {
  //       setFormData({
  //         fullName: "",
  //         email: "",
  //         city: "",
  //         phone: "",
  //         role: "",
  //       });
  //     }

  //     setAgreed(false);
  //     setIsChecked(false);
  //   } catch (error) {
  //     console.error("Submission Error:", error); // Logs the actual error
  //     alert(
  //       "Error submitting form. Please check your internet connection and try again."
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async () => {
    if (!agreed) {
      alert("You must agree to the Terms of Use before submitting.");
      return;
    }
  
    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwOUFyJQwouPbMY1ipoFJtW1OteTEotRLAWP96J10IGe1AJ_KevJ3LgbCVB-RgBN7nR/exec";
  
    try {
      const response = await axios.post(googleSheetUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Response from Google Sheets:", response.data);
      alert("Form Submitted Successfully!");
  
    } catch (error) {
      console.error("Submission Error:", error);
      alert(
        "Error submitting form. Please check your internet connection and try again."
      );
    }
  };
  

  return (
    <View style={styles.container1}>
      <Text style={styles.header1}>Agreement</Text>

      <TouchableOpacity
        style={styles.optionContainer1}
        onPress={() => {
          setIsChecked((prev) => !prev);
          setAgreed((prev) => !prev);
        }}
        disabled={isSubmitting} // Disables interaction when submitting
      >
        <Icon
          name={isChecked ? "ri-checkbox-fill" : "ri-checkbox-blank-line"}
          size={24}
          color="black"
        />
        <Text style={styles.optionText1}>I Agree with Terms of Use</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={handleSubmit}
        disabled={isSubmitting} // Prevents multiple clicks during submission
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function JoinUsScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      <Stack.Screen
        name="RoleAvailability"
        component={RoleAvailabilityScreen}
      />
      <Stack.Screen name="Agreement" component={AgreementScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F8F9FF",
    height: 400,
    borderWidth: 1,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8F9FF",
    height: "50%",
    // borderWidth: 10,
    // borderColor: 'red'
  },
  miniContainer: {
    width: "100%",
    height: "50%",
    // borderColor: 'red',
    // borderWidth: 1
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    // borderColor: 'red',
    // borderWidth: 1,
    height: "18%",

    // marginTop: 20,
  },
  header1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
    // borderColor: 'red',
    // borderWidth: 1,
    // height: "20%",

    // marginTop: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 37,
    backgroundColor: "#F8F9FF",
    height: 55,
    paddingLeft: 30,
  },
  button: {
    borderRadius: 12,
    // marginTop: 35,
    height: 56,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
  },
  button2: {
    borderRadius: 12,
    // marginTop: 35,
    height: 56,
    width: "60%",
    justifyContent: "center",
    alignItems: "center", // Centers content inside the button
    alignSelf: "center", // Centers the button inside its parent
    backgroundColor: "#000", // Example color
    paddingVertical: 12, // Adjust padding for better look
    marginTop: 40,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#000",
  },
  optionContainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1,
  },
  optionText1: {
    fontSize: 18,
    marginLeft: 10,
    color: "#000",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  SubContainer: {
    // borderWidth: 1,
    height: 240,
  },
});
