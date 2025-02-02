
// working code >>

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { Image, StyleSheet, Platform, View, Dimensions } from "react-native";
// import { Appearance } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import MapsScreen from "./screens/MapsScreen";
// import AddWasteScreen from "./screens/AddWasteScreen";
// import JoinUsScreen from "./screens/JoinUsScreen";
// import SettingsScreen from "./screens/SettingsScreen";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const { width, height } = Dimensions.get("window");

// // Tab Navigation
// const Tab = createBottomTabNavigator();

// const App = () => {
//   // Get the system theme (light or dark)
//   const systemTheme = Appearance.getColorScheme();

//   const logo =
//     systemTheme === "dark"
//       ? require("./assets/MainLogoDark.png")
//       : require("./assets/MainLogoDark.png");

//   // Custom header component with logo
//   const HeaderLogo = () => (
//     <View style={styles.headerContainer}>
//       <Image
//         width={width * 0.8}
//         height={height * 0.4}
//         source={logo}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//     </View>
//   );

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size }) => {
//             let iconSource;
//             if (route.name === "Home") {
//               iconSource = focused
//                 ? require("./assets/Icons/home-3-fill.png")
//                 : require("./assets/Icons/home-3-line.png");
//             } else if (route.name === "Maps") {
//               iconSource = focused
//                 ? require("./assets/Icons/map-pin-fill.png")
//                 : require("./assets/Icons/map-pin-line.png");
//             } else if (route.name === "Add Waste") {
//               iconSource = focused
//                 ? require("./assets/Icons/qr-scan-fill.png")
//                 : require("./assets/Icons/qr-scan-line.png");
//             } else if (route.name === "Join Us") {
//               iconSource = focused
//                 ? require("./assets/Icons/user-3-fill.png")
//                 : require("./assets/Icons/user-3-line.png");
//             } else if (route.name === "Settings") {
//               iconSource = focused
//                 ? require("./assets/Icons/settings-3-fill.png")
//                 : require("./assets/Icons/settings-3-line.png");
//             }

//             return (
//               <Image
//                 source={iconSource}
//                 style={{
//                   width: size,
//                   height: size,
//                   }}
//               />
//             );
//           },
//           headerTitle: () => <HeaderLogo />,
//           headerTitleAlign: "center",
//           headerStyle: styles.header,
//           tabBarLabel: () => null,
//           tabBarStyle: styles.tabBar,
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           style={styles.heading}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />

//         <Tab.Screen
//           name="Maps"
//           component={MapsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Add Waste"
//           component={AddWasteScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Join Us"
//           component={JoinUsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: 105,
//     height: 25,
//     resizeMode: "contain",
//   },
//   header: {
//     height: 100,
//     backgroundColor: "#ECEDFF",
//   },
//   tabBar: {
//     backgroundColor: "#ECEDFF",
//     paddingBottom: 10,
//     paddingTop: 10,
//     elevation: 5, // Shadow effect for Android
//     height: 70,
//     position: "absolute",
//     width: "100%", // 90% of the screen width
//     alignSelf: "center", // Ensures centering
//     left: 0, // Reset left positioning
//     right: 0, // Reset right positioning
//     // bottom: 10, // Floating position
//     borderRadius: 20, // Rounded corners for floating effect
//     alignItems: "center", // Ensure alignment
//     justifyContent: "center", // Center content
//     shadowColor: "#000",
//     shadowOpacity: 0.6,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: -10 },
//     elevation: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "400",
//   },
// });

// export default App;

// working well >>

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { Image, StyleSheet, Platform, View, Dimensions } from "react-native";
// import { Appearance } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
// import MapsScreen from "./screens/MapsScreen";
// import AddWasteScreen from "./screens/AddWasteScreen";
// import JoinUsScreen from "./screens/JoinUsScreen";
// import SettingsScreen from "./screens/SettingsScreen";
// import Icon from 'react-native-remix-icon';  // Import remix icon package

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const { width, height } = Dimensions.get("window");

// // Tab Navigation
// const Tab = createBottomTabNavigator();

// const App = () => {
//   // Get the system theme (light or dark)
//   const systemTheme = Appearance.getColorScheme();

//   const logo =
//     systemTheme === "dark"
//       ? require("./assets/MainLogoDark.png")
//       : require("./assets/MainLogoDark.png");

//   // Custom header component with logo
//   const HeaderLogo = () => (
//     <View style={styles.headerContainer}>
//       <Image
//         width={width * 0.8}
//         height={height * 0.4}
//         source={logo}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//     </View>
//   );

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size }) => {
//             let iconName;
//             if (route.name === "Home") {
//               iconName = focused ? "home-3-fill" : "home-3-line";
//             } else if (route.name === "Maps") {
//               iconName = focused ? "map-pin-fill" : "map-pin-line";
//             } else if (route.name === "Add Waste") {
//               iconName = focused ? "qr-scan-fill" : "qr-scan-line";
//             } else if (route.name === "Join Us") {
//               iconName = focused ? "user-3-fill" : "user-3-line";
//             } else if (route.name === "Settings") {
//               iconName = focused ? "settings-3-fill" : "settings-3-line";
//             }

//             return (
//               <Icon
//                 name={iconName}  // Correctly pass the icon name here
//                 size={size}
//                 color="black"
//               />
//             );
//           },
//           headerTitle: () => <HeaderLogo />,
//           headerTitleAlign: "center",
//           headerStyle: styles.header,
//           tabBarLabel: () => null,
//           tabBarStyle: styles.tabBar,
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           style={styles.heading}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />

//         <Tab.Screen
//           name="Maps"
//           component={MapsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Add Waste"
//           component={AddWasteScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Join Us"
//           component={JoinUsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             headerTitleAlign: "center",
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: 105,
//     height: 25,
//     resizeMode: "contain",
//   },
//   header: {
//     height: 100,
//     backgroundColor: "#ECEDFF",
//   },
//   tabBar: {
//     backgroundColor: "#ECEDFF",
//     paddingBottom: 10,
//     paddingTop: 10,
//     elevation: 5, // Shadow effect for Android
//     height: 70,
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
//     elevation: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "400",
//   },
// });

// export default App;


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Appearance } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MapsScreen from "./screens/MapsScreen";
import AddWasteScreen from "./screens/AddWasteScreen";
import JoinUsScreen from "./screens/JoinUsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Icon from 'react-native-remix-icon';  // Import remix icon package

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const { width, height } = Dimensions.get("window");

// Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  // Get the system theme (light or dark)
  const systemTheme = Appearance.getColorScheme();

  const logo = (
    <View style={styles.logoContainer}>
      <Icon name="ri-earth-line" size={30} color="black" />
      <Text style={styles.logoText}>JeevEco</Text>  
    </View>
  );

  // Custom header component with logo
  const HeaderLogo = () => (
    <View style={styles.headerContainer}>
      {logo}
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-3-fill" : "home-3-line";
            } else if (route.name === "Maps") {
              iconName = focused ? "map-pin-fill" : "map-pin-line";
            } else if (route.name === "Add Waste") {
              iconName = focused ? "qr-scan-fill" : "qr-scan-line";
            } else if (route.name === "Join Us") {
              iconName = focused ? "user-3-fill" : "user-3-line";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings-3-fill" : "settings-3-line";
            }

            return (
              <Icon
                name={iconName}  // Correctly pass the icon name here
                size={size}
                color="black"
              />
            );
          },
          headerTitle: () => <HeaderLogo />,
          headerTitleAlign: "center",
          headerStyle: styles.header,
          tabBarLabel: () => null,
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          style={styles.heading}
          options={{
            headerTitleAlign: "center",
          }}
        />

        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Add Waste"
          component={AddWasteScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Join Us"
          component={JoinUsScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",  // Align icon and text horizontally
  },
  logoContainer: {
    flexDirection: "row",  // Horizontal alignment for the icon and text
    alignItems: "center",
  },
  logoText: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,  // Space between the icon and the text
    color: "black",
  },
  header: {
    height: 100,
    backgroundColor: "#ECEDFF",
  },
  tabBar: {
    backgroundColor: "#ECEDFF",
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 5, // Shadow effect for Android
    height: 70,
    position: "absolute",
    width: "100%", // 90% of the screen width
    alignSelf: "center", // Ensures centering
    left: 0, // Reset left positioning
    right: 0, // Reset right positioning
    borderRadius: 20, // Rounded corners for floating effect
    alignItems: "center", // Ensure alignment
    justifyContent: "center", // Center content
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default App;
