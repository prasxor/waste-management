

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import HomeScreen from './screens/HomeScreen';
// import MapsScreen from './screens/MapsScreen';
// import AddWasteScreen from './screens/AddWasteScreen';
// import JoinUsScreen from './screens/JoinUsScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import { StyleSheet } from 'react-native';

// // Firebase Configuration
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

// // Tab Navigation
// const Tab = createBottomTabNavigator();
// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Maps" component={MapsScreen} />
//       <Tab.Screen name="Add Waste" component={AddWasteScreen} />
//       <Tab.Screen name="Join Us" component={JoinUsScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     flex: 1,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   homeContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   descriptionText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   actionButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
// });

// export default App;


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { Image, StyleSheet } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import MapsScreen from './screens/MapsScreen';
// import AddWasteScreen from './screens/AddWasteScreen';
// import JoinUsScreen from './screens/JoinUsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// // Firebase Configuration
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

// // Tab Navigation
// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconSource;

//           if (route.name === 'Home') {
//             iconSource = focused
//               ? require('./assets/HomeActive.png') // Active icon for Home
//               : require('./assets/HomeInactive.png'); // Inactive icon for Home
//           } else if (route.name === 'Maps') {
//             iconSource = focused
//               ? require('./assets/LocationActive.png') // Active icon for Maps
//               : require('./assets/LocationInactive.png'); // Inactive icon for Maps
//           } else if (route.name === 'Add Waste') {
//             iconSource = focused
//               ? require('./assets/CameraActive.png') // Active icon for Add Waste
//               : require('./assets/CameraInactive.png'); // Inactive icon for Add Waste
//           } else if (route.name === 'Join Us') {
//             iconSource = focused
//               ? require('./assets/JoinUsActive.png') // Active icon for Join Us
//               : require('./assets/JoinUsInactive.png'); // Inactive icon for Join Us
//           } else if (route.name === 'Settings') {
//             iconSource = focused
//               ? require('./assets/settingActive.png') // Active icon for Settings
//               : require('./assets/SettingInactive.png'); // Inactive icon for Settings
//           }

//           return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
//         },
//         tabBarLabel: () => null, // Hide the text label
//         tabBarStyle: styles.tabBar,
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Maps"
//         component={MapsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Add Waste"
//         component={AddWasteScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Join Us"
//         component={JoinUsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     paddingBottom: 5,
//     paddingTop: 5,
//   },
  
// });

// export default App;


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { Image, StyleSheet } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import MapsScreen from './screens/MapsScreen';
// import AddWasteScreen from './screens/AddWasteScreen';
// import JoinUsScreen from './screens/JoinUsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// // Firebase Configuration
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

// // Tab Navigation
// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconSource;

//           if (route.name === 'Home') {
//             iconSource = focused
//               ? require('./assets/HomeActive.png') // Active icon for Home
//               : require('./assets/HomeInactive.png'); // Inactive icon for Home
//           } else if (route.name === 'Maps') {
//             iconSource = focused
//               ? require('./assets/LocationActive.png') // Active icon for Maps
//               : require('./assets/LocationInactive.png'); // Inactive icon for Maps
//           } else if (route.name === 'Add Waste') {
//             iconSource = focused
//               ? require('./assets/CameraActive.png') // Active icon for Add Waste
//               : require('./assets/CameraInactive.png'); // Inactive icon for Add Waste
//           } else if (route.name === 'Join Us') {
//             iconSource = focused
//               ? require('./assets/JoinUsActive.png') // Active icon for Join Us
//               : require('./assets/JoinUsInactive.png'); // Inactive icon for Join Us
//           } else if (route.name === 'Settings') {
//             iconSource = focused
//               ? require('./assets/settingActive.png') // Active icon for Settings
//               : require('./assets/SettingInactive.png'); // Inactive icon for Settings
//           }

//           return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
//         },
//         tabBarLabel: () => null, // Hide the text label
//         tabBarStyle: styles.tabBar,
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Maps"
//         component={MapsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Add Waste"
//         component={AddWasteScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Join Us"
//         component={JoinUsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogo.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           headerTitle: () => (
//             <Image
//               source={require('./assets/MainLogoDark.png')} // Replace with your logo
//               style={{ width: 100, height: 30 }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     paddingBottom: 5,
//     paddingTop: 5,
//   },
// });

// export default App;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { Image, StyleSheet, Platform } from 'react-native';
// import { Appearance } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import MapsScreen from './screens/MapsScreen';
// import AddWasteScreen from './screens/AddWasteScreen';
// import JoinUsScreen from './screens/JoinUsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// // Firebase Configuration
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

// // Tab Navigation
// const Tab = createBottomTabNavigator();

// const App = () => {
//   // Get the system theme (light or dark)
//   const systemTheme = Appearance.getColorScheme();

//   // Set the logo based on the system theme
//   const logo = systemTheme === 'dark' 
//     ? require('./assets/MainLogoDark.svg') 
//     : require('./assets/MainLogo.png');

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconSource;

//             if (route.name === 'Home') {
//               iconSource = focused
//                 ? require('./assets/HomeActive.png') // Active icon for Home
//                 : require('./assets/HomeInactive.png'); // Inactive icon for Home
//             } else if (route.name === 'Maps') {
//               iconSource = focused
//                 ? require('./assets/LocationActive.png') // Active icon for Maps
//                 : require('./assets/LocationInactive.png'); // Inactive icon for Maps
//             } else if (route.name === 'Add Waste') {
//               iconSource = focused
//                 ? require('./assets/CameraActive.png') // Active icon for Add Waste
//                 : require('./assets/CameraInactive.png'); // Inactive icon for Add Waste
//             } else if (route.name === 'Join Us') {
//               iconSource = focused
//                 ? require('./assets/JoinUsActive.png') // Active icon for Join Us
//                 : require('./assets/JoinUsInactive.png'); // Inactive icon for Join Us
//             } else if (route.name === 'Settings') {
//               iconSource = focused
//                 ? require('./assets/settingActive.png') // Active icon for Settings
//                 : require('./assets/SettingInactive.png'); // Inactive icon for Settings
//             }

//             return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
//           },
//           tabBarLabel: () => null, // Hide the text label
//           tabBarStyle: styles.tabBar,
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerTitle: () => (
//               <Image
//                 source={logo} // Dynamic logo based on system theme
//                 style={{ width: 100, height: 30 }}
//               />
//             ),
//             headerTitleAlign: 'center', // Center the logo
//           }}
//         />
//         <Tab.Screen
//           name="Maps"
//           component={MapsScreen}
//           options={{
//             headerTitle: () => (
//               <Image
//                 source={logo} // Dynamic logo based on system theme
//                 style={{ width: 100, height: 30 }}
//               />
//             ),
//             headerTitleAlign: 'center', // Center the logo
//           }}
//         />
//         <Tab.Screen
//           name="Add Waste"
//           component={AddWasteScreen}
//           options={{
//             headerTitle: () => (
//               <Image
//                 source={logo} // Dynamic logo based on system theme
//                 style={{ width: 100, height: 30 }}
//               />
//             ),
//             headerTitleAlign: 'center', // Center the logo
//           }}
//         />
//         <Tab.Screen
//           name="Join Us"
//           component={JoinUsScreen}
//           options={{
//             headerTitle: () => (
//               <Image
//                 source={logo} // Dynamic logo based on system theme
//                 style={{ width: 100, height: 30 }}
//               />
//             ),
//             headerTitleAlign: 'center', // Center the logo
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{
//             headerTitle: () => (
//               <Image
//                 source={logo} // Dynamic logo based on system theme
//                 style={{ width: 100, height: 30 }}
//               />
//             ),
//             headerTitleAlign: 'center', // Center the logo
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     paddingBottom: 5,
//     paddingTop: 5,
//     elevation: 0, // Remove shadow for both iOS and Android
//     borderTopColor: 'transparent', // Remove the default blue fill color on the tab bar
//   },
// });

// export default App;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { StyleSheet, Image } from 'react-native';
import { Appearance } from 'react-native'; // Correct import
import Svg, { Path } from 'react-native-svg'; // Import Svg and Path components from react-native-svg

import HomeScreen from './screens/HomeScreen';
import MapsScreen from './screens/MapsScreen';
import AddWasteScreen from './screens/AddWasteScreen';
import JoinUsScreen from './screens/JoinUsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Firebase Configuration
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

// Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  // Get the system theme (light or dark)
  const systemTheme = Appearance.getColorScheme();

  // Set the logo based on the system theme
  const logo = systemTheme === 'dark' 
    ? require('./assets/MainLogoDark.svg') 
    : require('./assets/MainLogo.png');

  // SVG icons for tabs
  const HomeIcon = ({ focused, color, size }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
      <Path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z" />
    </Svg>
  );

  const MapIcon = ({ focused, color, size }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
      <Path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z" />
    </Svg>
  );

  const CameraIcon = ({ focused, color, size }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
      <Path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" />
    </Svg>
  );

  const UserIcon = ({ focused, color, size }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
      <Path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 18C8.68629 18 6 16.2091 6 14H18C18 16.2091 15.3137 18 12 18Z" />
    </Svg>
  );

  const SettingsIcon = ({ focused, color, size }) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
      <Path d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM12 16C10.7909 16 9.68799 15.5799 8.92944 14.8284C8.17101 14.0769 7.75699 13.0513 7.9255 12.0247C8.09401 11.0007 8.7958 10.1576 9.75736 9.97169C10.7199 9.78578 11.7336 10.2003 12.0285 11.0368C12.3234 11.8733 12.1744 12.9666 11.512 13.5245C11.423 13.6082 11.3475 13.6988 11.2741 13.7931C11.152 13.9256 10.9942 13.9837 10.8401 14.0197C10.687 14.0557 10.5301 14.0638 10.3806 14.0418C10.2311 14.0198 10.0902 13.9699 9.96102 13.8974C9.78398 13.7616 9.70714 13.4937 9.78503 13.2616C9.86292 13.0296 10.1696 12.9178 10.4016 13.0191C10.5524 13.0512 10.6832 13.1113 10.7893 13.1887C11.359 13.5877 11.8318 14.0741 12.2306 14.6126C12.5937 15.1106 13.0217 15.5112 13.4684 15.8853C14.015 16.2896 14.6035 16.6476 15.1409 16.9797C15.6783 17.3117 16.1491 17.5731 16.5415 17.7581C16.8586 17.9111 17.1611 18.0099 17.4604 18.0547C17.7597 18.0995 18.0577 18.0898 18.351 18.0252C18.6442 17.9607 18.9247 17.8429 19.1749 17.6811C19.4249 17.5194 19.6448 17.3164 19.8231 17.0739C19.9662 16.9018 20.0878 16.7094 20.1687 16.4935C20.2496 16.2775 20.2879 16.0524 20.2851 15.8261C20.2822 15.5997 20.2376 15.3744 20.1512 15.1609C20.0649 14.9473 19.9374 14.7482 19.7771 14.5743C19.6148 14.4004 19.4206 14.2538 19.2082 14.1357C18.9939 14.0166 18.7665 13.9257 18.5265 13.8659C18.2866 13.806 18.0365 13.7771 17.7869 13.7794C17.5372 13.7816 17.2881 13.8157 17.0389 13.8817C16.7896 13.9477 16.5407 14.0487 16.3015 14.1853C16.0622 14.3218 15.8357 14.4926 15.6284 14.6898C15.4211 14.8871 15.2345 15.1095 15.0736 15.3523C14.9127 15.5951 14.7791 15.8554 14.6744 16.1291C14.5697 16.4027 14.4936 16.6872 14.4468 16.9765C14.4001 17.2658 14.3828 17.5574 14.3949 17.8489C14.4069 18.1405 14.4479 18.4298 14.5167 18.7091C14.5856 18.9884 14.6811 19.2541 14.8016 19.5034C14.9221 19.7528 15.0669 19.9832 15.2325 20.1858C15.3981 20.3885 15.5836 20.5615 15.7841 20.6983C15.9846 20.8352 16.1989 20.9367 16.4195 20.9993C16.6401 21.0619 16.8657 21.0845 17.0895 21.0654C17.3133 21.0463 17.5329 20.9864 17.7423 20.8862C17.9517 20.7861 18.1487 20.6476 18.3293 20.4773C18.5099 20.307 18.6723 20.1063 18.8117 19.8827" />
    </Svg>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;

            // Assign icons based on the route name
            if (route.name === 'Home') {
              IconComponent = HomeIcon;
            } else if (route.name === 'Maps') {
              IconComponent = MapIcon;
            } else if (route.name === 'Add Waste') {
              IconComponent = CameraIcon;
            } else if (route.name === 'Join Us') {
              IconComponent = UserIcon;
            } else if (route.name === 'Settings') {
              IconComponent = SettingsIcon;
            }

            return <IconComponent focused={focused} color={color} size={size} />;
          },
          tabBarLabel: () => null, // Hide the text label
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo} // Dynamic logo based on system theme
                style={{ width: 100, height: 30 }}
              />
            ),
            headerTitleAlign: 'center', // Center the logo
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo} // Dynamic logo based on system theme
                style={{ width: 100, height: 30 }}
              />
            ),
            headerTitleAlign: 'center', // Center the logo
          }}
        />
        <Tab.Screen
          name="Add Waste"
          component={AddWasteScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo} // Dynamic logo based on system theme
                style={{ width: 100, height: 30 }}
              />
            ),
            headerTitleAlign: 'center', // Center the logo
          }}
        />
        <Tab.Screen
          name="Join Us"
          component={JoinUsScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo} // Dynamic logo based on system theme
                style={{ width: 100, height: 30 }}
              />
            ),
            headerTitleAlign: 'center', // Center the logo
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: () => (
              <Image
                source={logo} // Dynamic logo based on system theme
                style={{ width: 100, height: 30 }}
              />
            ),
            headerTitleAlign: 'center', // Center the logo
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
});

export default App;
