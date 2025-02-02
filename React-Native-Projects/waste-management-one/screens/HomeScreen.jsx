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


import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/homeScreenBg.png')}
          style={styles.heroImage}
        />
        <Text style={styles.heroText}>Join the Movement for a Cleaner Planet</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>What We Offer</Text>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Waste Reporting</Text>
          <Text style={styles.featureDescription}>
            Report waste in your area and help keep your community clean.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Clean-Up Events</Text>
          <Text style={styles.featureDescription}>
            Join local clean-up events and make a difference.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Eco Tips</Text>
          <Text style={styles.featureDescription}>
            Get daily tips on how to live a more sustainable life.
          </Text>
        </View>
      </View>

      {/* Call to Action */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate('Add Waste')}
      >
        <Text style={styles.ctaButtonText}>Report Waste Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEDFF',
    marginBottom: 60
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
  heroSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  heroImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  heroText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featuresSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
  ctaButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;