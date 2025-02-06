// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { styles } from "../App";

// const HomeScreen = ({ navigation }) => (
//   <View style={styles.homeContainer}>
//     <Text style={styles.welcomeText}>Welcome to EcoTrack</Text>
//     <Text style={styles.descriptionText}>
//       Join us in making the world a cleaner place. Report waste, track clean-up
//       activities, and connect with a community dedicated to environmental
//       preservation.
//     </Text>
//     <TouchableOpacity
//       style={styles.actionButton}
//       onPress={() => navigation.navigate("Add Waste")}
//     >
//       <Text style={styles.buttonText}>Report Waste</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.actionButton}
//       onPress={() => navigation.navigate("Maps")}
//     >
//       <Text style={styles.buttonText}>View Map</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.actionButton}
//       onPress={() => navigation.navigate("Join Us")}
//     >
//       <Text style={styles.buttonText}>Join Our Community</Text>
//     </TouchableOpacity>
//   </View>
// );

// export default HomeScreen;

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroText1}>A Cleaner City Starts with You.</Text>
        <TouchableOpacity style={styles.mainBtn}>
          <Text style={styles.mainBtnText}>JOIN NOW!</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>How To Get Started</Text>
        <View style={styles.featureCard}>
          <Text style={styles.featureCardfirstText}>Spot Waste</Text>
          <Text style={styles.featureCardsecondText}>
            See garbage around you? Open JeevEco.
          </Text>
          <View style={styles.featureCardNumberMain}>
            <View style={styles.featureCardNumber}>
              <Text style={styles.featureCardNumbertext}>1</Text>
            </View>
          </View>
        </View>
        <View style={[styles.featureCard, { backgroundColor: "#F1DC8A" }]} >
          <Text style={styles.featureCardfirstText}>Snap a Photo</Text>
          <Text style={styles.featureCardsecondText}>
          Capture an image of the waste.
          </Text>
          <View style={styles.featureCardNumberMain}>
            <View style={[styles.featureCardNumber, {backgroundColor: '#CDBB75'}]}>
              <Text style={styles.featureCardNumbertext}>2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.featureCard, { backgroundColor: "#C9E0DD" }]} >
          <Text style={styles.featureCardfirstText}>Provide Details</Text>
          <Text style={styles.featureCardsecondText}>
          See garbage around you? Open JeevEco.
          </Text>
          <View style={styles.featureCardNumberMain}>
            <View style={[styles.featureCardNumber, {backgroundColor: '#ABBEBC'}]}>
              <Text style={styles.featureCardNumbertext}>3</Text>
            </View>
          </View>
        </View>
        <View style={[styles.featureCard, { backgroundColor: "#F2E6DF" }]} >
          <Text style={styles.featureCardfirstText}>Submit & Action</Text>
          <Text style={styles.featureCardsecondText}>
          See garbage around you? Open JeevEco.
          </Text>
          <View style={styles.featureCardNumberMain}>
            <View style={[styles.featureCardNumber, {backgroundColor: '#CEC3BE'}]}>
              <Text style={styles.featureCardNumbertext}>4</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate("Add Waste")}
      >
        <Text style={styles.ctaButtonText}>Report Waste Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    marginBottom: 60,
    color: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4CAF50",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  heroSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  heroText1: {
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "center",
    width: "90%",
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 20,
  },
  mainBtn: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "60%",
    height: 60,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  mainBtnText: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#000000",
    fontWeight: "bold",
  },

  heroImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  heroText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  featuresSection: {
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    height: "auto",
    paddingVertical: 40,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000000",
    textAlign: "center",
  },
  featureCard: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "98%",
    height: 242,
    borderRadius: 15,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BEC8F9",
    marginBottom: 30,

  },

  featureCardfirstText: {
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black",
    height: "30%",
    fontSize: 30,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    paddingTop: 10,
  },
  featureCardsecondText: {
    width: "100%",
    // borderWidth: 1,
    // borderColor: "black",
    height: "30%",
    fontSize: 20,
    fontWeight: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    paddingRight: 20,
  },
  featureCardNumberMain: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "31%",
    width: "100%",
  },

  featureCardNumber: {
    width: "25%",
    // borderWidth: 1,
    // borderColor: "black",
    height: "100%",
    fontSize: 20,
    fontWeight: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#A2AAD4",
    borderRadius: 100,
  },
  featureCardNumbertext: {
    fontSize: 30,
    fontWeight: "bold",
  },

  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#666",
  },
  ctaButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
