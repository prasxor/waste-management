// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { StyleSheet, View, Text, Dimensions } from "react-native";
// import Icon from "react-native-remix-icon"; // Import remix icon package
// import { StatusBar, useColorScheme } from "react-native";

// import HomeScreen from "./screens/HomeScreen";
// import MapsScreen from "./screens/MapsScreen";
// import AddWasteScreen from "./screens/AddWasteScreen";
// import JoinUsScreen from "./screens/JoinUsScreen";
// import SettingsScreen from "./screens/SettingsScreen";

// const { width, height } = Dimensions.get("window");

// const Tab = createBottomTabNavigator();

// const App = () => {
//   const theme = useColorScheme();
//   const HeaderLogo = () => (
//     <View style={styles.headerContainer}>
//       <View style={styles.logoContainer}>
//         <Icon name="ri-earth-line" size={30} color="#ffffff" />
//         <Text style={styles.logoText}>JeevEco</Text>
//       </View>
//     </View>
//   );

//   return (
//     <>
//       <StatusBar
//         barStyle={theme === "dark" ? "light-content" : "dark-content"}
//         backgroundColor={theme === "dark" ? "#000000" : "#FFFFFF"}
//       />
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             headerTitle: () => <HeaderLogo />, // Use the custom header logo
//             headerStyle: {
//               backgroundColor: "#000000", // Ensure full black header
//               height: 80, // Adjust height as needed
//             },
//             headerTitleAlign: "center", // Ensures the logo is centered
//             tabBarIcon: ({ focused, size }) => {
//               let iconName;
//               if (route.name === "Home") iconName = "ri-home-line";
//               else if (route.name === "Maps") iconName = "ri-map-pin-line";
//               else if (route.name === "Add Waste")
//                 iconName = "ri-add-circle-line";
//               else if (route.name === "Join Us") iconName = "ri-user-add-line";
//               else if (route.name === "Settings")
//                 iconName = "ri-settings-2-line";

//               return (
//                 <Icon
//                   name={iconName}
//                   size={size}
//                   color={focused ? "tomato" : "gray"}
//                 />
//               );
//             },
//           })}
//         >
//           <Tab.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ headerTitle: HeaderLogo }}
//           />
//           <Tab.Screen
//             name="Maps"
//             component={MapsScreen}
//             options={{ headerTitle: HeaderLogo }}
//           />
//           <Tab.Screen
//             name="Add Waste"
//             component={AddWasteScreen}
//             options={{ headerTitle: HeaderLogo }}
//           />
//           <Tab.Screen
//             name="Join Us"
//             component={JoinUsScreen}
//             options={{ headerTitle: HeaderLogo }}
//           />
//           <Tab.Screen
//             name="Settings"
//             component={SettingsScreen}
//             options={{ headerTitle: HeaderLogo }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: "#000000", // Black background
//     width: "100%", // Full width
//     height: 60, // Adjust height as needed
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logoText: {
//     color: "#FFFFFF", // White text
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 8,
//   },
//   header: {
//     height: 100,
//     backgroundColor: "#ECEDFF",
//   },
//   tabBar: {
//     backgroundColor: "#F5F4F9",
//     // paddingBottom: 10,
//     paddingTop: 10,
//     elevation: 5, // Shadow effect for Android
//     height: 100,
//     position: "absolute",
//     width: "100%", // 90% of the screen width
//     alignSelf: "center", // Ensures centering
//     left: 0, // Reset left positioning
//     right: 0, // Reset right positioning
//     borderRadius: 20, // Rounded corners for floating effect
//     alignItems: "center", // Ensure alignment
//     justifyContent: "center", // Center content
//     shadowColor: "#000",
//     shadowOpacity: 0.6,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: -10 },
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "400",
//   },
// });

// export default App;

import {React, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-remix-icon";
import { StatusBar, useColorScheme } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import MapsScreen from "./screens/MapsScreen";
import AddWasteScreen from "./screens/AddWasteScreen";
import JoinUsScreen from "./screens/JoinUsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import * as SplashScreen from "expo-splash-screen";

const Tab = createBottomTabNavigator();

const App = () => {
  const theme = useColorScheme();
  const HeaderLogo = () => (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Icon name="ri-earth-line" size={30} color="#000000" />
        <Text style={styles.logoText}>JeevEco</Text>
      </View>
    </View>
  );

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Keep splash screen visible
      setTimeout(async () => {
        await SplashScreen.hideAsync(); // Hide splash screen after delay
      }, 2000); // 2-second delay
    }
    prepare();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme === "dark" ? "#000000" : "#FFFFFF"}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitle: () => <HeaderLogo />, // Custom header logo
            headerStyle: {
              backgroundColor: "#DDFEB3",
              height: 60,
            },
            headerTitleAlign: "center",
            tabBarShowLabel: false, // Remove tab labels
            tabBarStyle: {
              backgroundColor: "#F5F4F9", // Change tab bar color
              height: 80, // Increase tab bar height
              borderTopLeftRadius: 20, // Optional: rounded corners
              borderTopRightRadius: 20, // Optional: rounded corners
              position: "absolute",
              paddingBottom: 0, // Adjust spacing
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingTop: 20,
            },
            tabBarItemStyle: {
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // Ensure full height usage
            },
            tabBarOptions: {
              keyboardHidesTabBar: true, // Ensures tab bar remains fixed
            },
            tabBarIcon: ({ focused, size }) => {
              let iconName;
              if (route.name === "Home") iconName = "ri-home-3-line";
              else if (route.name === "Maps") iconName = "ri-map-pin-line";
              else if (route.name === "Add Waste")
                iconName = "ri-add-circle-fill";
              else if (route.name === "Join Us") iconName = "ri-user-add-line";
              else if (route.name === "Settings")
                iconName = "ri-settings-2-line";

              return (
                <Icon
                  name={iconName}
                  size={30}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                  }}
                  color={focused ? "black" : "gray"} // Black when selected, gray when inactive
                />
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="Add Waste" component={AddWasteScreen} />
          <Tab.Screen name="Join Us" component={JoinUsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#DDFEB3",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",

  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",

  },
  logoText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default App;
