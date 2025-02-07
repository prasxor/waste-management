// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   Alert,
//   Image,
//   TouchableOpacity,
//   PanResponder,
//   StyleSheet,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [cardExpanded, setCardExpanded] = useState(false);
//   const cardHeight = useRef(new Animated.Value(0)).current;
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadWasteReports();
//     getLocation();
//   }, []);

//   const loadWasteReports = async () => {
//     try {
//       const wasteReports =
//         JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//       setMarkers(wasteReports);
//     } catch (error) {
//       console.error("Error loading waste reports:", error);
//       Alert.alert("Error", "Failed to load waste data.");
//     }
//   };

//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Enable location permissions in settings"
//         );
//         return;
//       }

//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);
//     } catch (error) {
//       console.error("Location error:", error);
//       Alert.alert("Error", "Failed to get location");
//     }
//   };

//   const handleMarkerPress = (marker) => {
//     console.log("Selected Marker:", marker);
//     console.log("Image URL:", marker.image); // Debugging Image Issue
//     setSelectedMarker(marker);
//     setCardExpanded(true);
//     Animated.spring(cardHeight, {
//       toValue: 400,
//       useNativeDriver: false,
//     }).start();
//   };

//   const closeCard = () => {
//     setSelectedMarker(null);
//     Animated.spring(cardHeight, {
//       toValue: 0,
//       useNativeDriver: false,
//     }).start(() => setCardExpanded(false));
//   };

//   // **PanResponder for Dragging Down**
//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (gestureState.dy > 50) {
//           closeCard();
//         }
//       },
//     })
//   ).current;

//   return (
//     <View style={{ flex: 1 }}>
//       {location ? (
//         <MapView
//           ref={mapRef}
//           provider={PROVIDER_GOOGLE}
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           onPress={closeCard}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title="Your Location"
//             pinColor="#26C6DA"
//           />

//           {markers.map((marker, index) =>
//             marker.latitude && marker.longitude ? (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 title={marker.username}
//                 description={marker.description}
//                 onPress={() => handleMarkerPress(marker)}
//                 pinColor="#EC407A"
//               />
//             ) : null
//           )}
//         </MapView>
//       ) : (
//         <Text>Loading...</Text>
//       )}

// {selectedMarker && (
//   <Animated.View
//     style={[styles.card, { height: cardHeight }]}
//     {...panResponder.panHandlers}
//   >
//     <Text>Waste Report by {selectedMarker.username}</Text>
//     <Text>Description: {selectedMarker.description}</Text>

//     {cardExpanded && (
//       <>
//         {selectedMarker.imageUrl ? (
//           <Image source={{ uri: selectedMarker.imageUrl }} style={styles.cardImage} />
//         ) : (
//           <Text style={styles.imageErrorText}>No Image Available</Text>
//         )}

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.cleanButton}>
//             <Text style={styles.buttonText}>I’ll Clean This</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.clearedButton}>
//             <Text style={styles.buttonText}>Waste Cleared</Text>
//           </TouchableOpacity>
//         </View>
//       </>
//     )}
//   </Animated.View>
// )}

//       <TouchableOpacity
//         onPress={() =>
//           location &&
//           mapRef.current?.animateToRegion({
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           })
//         }
//         style={styles.locationButton}
//       >
//         <Icon name="my-location" size={24} color="#FFF" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "white",
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: -5 },
//     zIndex: 1000,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
//   imageErrorText: {
//     textAlign: "center",
//     color: "gray",
//     fontStyle: "italic",
//     marginVertical: 10,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//   },
//   cleanButton: {
//     backgroundColor: "#28A745",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     flex: 1,
//     marginRight: 10,
//     alignItems: "center",
//   },
//   clearedButton: {
//     backgroundColor: "#FF5733",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     flex: 1,
//     marginLeft: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   locationButton: {
//     position: "absolute",
//     bottom: 180,
//     right: 20,
//     backgroundColor: "#2196F3",
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 5,
//   },
// });

// export default MapsScreen;

// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   PanResponder,
//   StyleSheet,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [cardExpanded, setCardExpanded] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const cardHeight = useRef(new Animated.Value(0)).current;
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadWasteReports();
//     getLocation();
//   }, []);

//   const loadWasteReports = async () => {
//     try {
//       const wasteReports =
//         JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//       setMarkers(wasteReports);
//     } catch (error) {
//       console.error("Error loading waste reports:", error);
//       Alert.alert("Error", "Failed to load waste data.");
//     }
//   };

//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Enable location permissions in settings"
//         );
//         return;
//       }

//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);
//       setLoading(false);
//     } catch (error) {
//       console.error("Location error:", error);
//       Alert.alert("Error", "Failed to get location");
//       setLoading(false);
//     }
//   };

//   const handleMarkerPress = (marker) => {
//     setSelectedMarker(marker);
//     setCardExpanded(true);
//     Animated.spring(cardHeight, {
//       toValue: 400,
//       useNativeDriver: false,
//     }).start();
//   };

//   const unexpandCard = () => {
//     Animated.spring(cardHeight, {
//       toValue: 100,
//       useNativeDriver: false,
//     }).start();
//     setCardExpanded(false);
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (gestureState.dy > 50) {
//           unexpandCard();
//         }
//       },
//     })
//   ).current;

//   return (
//     <View style={{ flex: 1 }}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#2196F3" />
//         </View>
//       ) : location ? (
//         <MapView
//           ref={mapRef}
//           provider={PROVIDER_GOOGLE}
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           customMapStyle={darkMapStyle}
//           onPress={unexpandCard}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title="Your Location"
//             pinColor="#26C6DA"
//           />

//           {markers.map((marker, index) =>
//             marker.latitude && marker.longitude ? (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 title={marker.username}
//                 description={marker.description}
//                 onPress={() => handleMarkerPress(marker)}
//                 pinColor="#EC407A"
//               />
//             ) : null
//           )}
//         </MapView>
//       ) : (
//         <Text>Error loading map</Text>
//       )}

//       {selectedMarker && (
//         <Animated.View
//           style={[styles.card, { height: cardHeight }]}
//           {...panResponder.panHandlers}
//         >
//           <Text>Waste Report by {selectedMarker.username}</Text>
//           <Text>Description: {selectedMarker.description}</Text>

//           {cardExpanded && selectedMarker.imageUrl ? (
//             <Image source={{ uri: selectedMarker.imageUrl }} style={styles.cardImage} />
//           ) : null}
//         </Animated.View>
//       )}

//       <TouchableOpacity
//         onPress={() =>
//           location &&
//           mapRef.current?.animateToRegion({
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           })
//         }
//         style={styles.locationButton}
//       >
//         <Icon name="my-location" size={24} color="#FFF" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#212121" }] },
//   { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
// ];

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   card: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "white",
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 8,
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
// });

// export default MapsScreen;

// below code is backup code

// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   PanResponder,
//   StyleSheet,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [cardExpanded, setCardExpanded] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const cardHeight = useRef(new Animated.Value(0)).current;
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadWasteReports();
//     getLocation();
//   }, []);

//   const loadWasteReports = async () => {
//     try {
//       const wasteReports =
//         JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//       setMarkers(wasteReports);
//     } catch (error) {
//       console.error("Error loading waste reports:", error);
//       Alert.alert("Error", "Failed to load waste data.");
//     }
//   };

//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Enable location permissions in settings"
//         );
//         return;
//       }

//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);
//       setLoading(false);
//     } catch (error) {
//       console.error("Location error:", error);
//       Alert.alert("Error", "Failed to get location");
//       setLoading(false);
//     }
//   };

//   const handleMarkerPress = (marker) => {
//     setSelectedMarker(marker);
//     setCardExpanded(true);
//     Animated.spring(cardHeight, {
//       toValue: 400,
//       useNativeDriver: false,
//     }).start();
//   };

//   const unexpandCard = () => {
//     Animated.spring(cardHeight, {
//       toValue: 100,
//       useNativeDriver: false,
//     }).start();
//     setCardExpanded(false);
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (gestureState.dy > 50) {
//           unexpandCard();
//         }
//       },
//     })
//   ).current;
//   const mapCustomStyle = [
//     { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
//     { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
//     { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
//     {
//       featureType: "administrative.locality",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#d59563" }],
//     },
//     {
//       featureType: "poi",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#d59563" }],
//     },
//     {
//       featureType: "poi.park",
//       elementType: "geometry",
//       stylers: [{ color: "#263c3f" }],
//     },
//     {
//       featureType: "poi.park",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#6b9a76" }],
//     },
//     {
//       featureType: "road",
//       elementType: "geometry",
//       stylers: [{ color: "#38414e" }],
//     },
//     {
//       featureType: "road",
//       elementType: "geometry.stroke",
//       stylers: [{ color: "#212a37" }],
//     },
//     {
//       featureType: "road",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#9ca5b3" }],
//     },
//     {
//       featureType: "road.highway",
//       elementType: "geometry",
//       stylers: [{ color: "#746855" }],
//     },
//     {
//       featureType: "road.highway",
//       elementType: "geometry.stroke",
//       stylers: [{ color: "#1f2835" }],
//     },
//     {
//       featureType: "road.highway",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#f3d19c" }],
//     },
//     {
//       featureType: "transit",
//       elementType: "geometry",
//       stylers: [{ color: "#2f3948" }],
//     },
//     {
//       featureType: "transit.station",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#d59563" }],
//     },
//     {
//       featureType: "water",
//       elementType: "geometry",
//       stylers: [{ color: "#17263c" }],
//     },
//     {
//       featureType: "water",
//       elementType: "labels.text.fill",
//       stylers: [{ color: "#515c6d" }],
//     },
//     {
//       featureType: "water",
//       elementType: "labels.text.stroke",
//       stylers: [{ color: "#17263c" }],
//     },
//   ];

//   return (
//     <View style={{ flex: 1 }}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#2196F3" />
//         </View>
//       ) : location ? (
//         <MapView
//           ref={mapRef}
//           provider={PROVIDER_GOOGLE}
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           customMapStyle={mapCustomStyle}
//           onPress={unexpandCard}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title="Your Location"
//             pinColor="#4285F4"
//           />

//           {markers.map((marker, index) =>
//             marker.latitude && marker.longitude ? (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 title={marker.username}
//                 description={marker.description}
//                 onPress={() => handleMarkerPress(marker)}
//                 pinColor="#EC407A"
//               />
//             ) : null
//           )}
//         </MapView>
//       ) : (
//         <Text>Error loading map</Text>
//       )}

//       {selectedMarker && (
//         <Animated.View
//           style={[styles.card, { height: cardHeight }]}
//           {...panResponder.panHandlers}
//         >
//           <Text>Waste Report by {selectedMarker.username}</Text>
//           <Text>Description: {selectedMarker.description}</Text>

//           {cardExpanded && selectedMarker.imageUrl ? (
//             <Image
//               source={{ uri: selectedMarker.imageUrl }}
//               style={styles.cardImage}
//             />
//           ) : null}
//         </Animated.View>
//       )}

//       <TouchableOpacity
//         onPress={() =>
//           location &&
//           mapRef.current?.animateToRegion({
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           })
//         }
//         style={styles.locationButton}
//       >
//         <Icon name="my-location" size={24} color="#FFF" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   card: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "white",
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 8,
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
// });

// export default MapsScreen;

// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   PanResponder,
//   StyleSheet,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [cardExpanded, setCardExpanded] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const cardHeight = useRef(new Animated.Value(100)).current;
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadWasteReports();
//     getLocation();
//   }, []);

//   const loadWasteReports = async () => {
//     try {
//       const wasteReports =
//         JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//       setMarkers(wasteReports);
//     } catch (error) {
//       console.error("Error loading waste reports:", error);
//       Alert.alert("Error", "Failed to load waste data.");
//     }
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (gestureState.dy > 50 && cardExpanded) {
//           unexpandCard();
//         } else if (gestureState.dy < -50 && !cardExpanded) {
//           handleMarkerPress(selectedMarker);
//         }
//       },
//     })
//   ).current;

//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Enable location permissions in settings"
//         );
//         return;
//       }
//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);
//       setLoading(false);
//     } catch (error) {
//       console.error("Location error:", error);
//       Alert.alert("Error", "Failed to get location");
//       setLoading(false);
//     }
//   };
//   const handleMarkerPress = (marker) => {
//     setSelectedMarker(marker);
//     setCardExpanded(true);

//     Animated.timing(cardHeight, {
//       toValue: 450, // Expand to full height
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const unexpandCard = () => {
//     Animated.timing(cardHeight, {
//       toValue: 200, // Collapse to smaller height
//       duration: 300,
//       useNativeDriver: false,
//     }).start(() => setCardExpanded(false));
//   };

//   const deleteMarker = (markerToDelete) => {
//     const updatedMarkers = markers.filter(
//       (marker) => marker !== markerToDelete
//     );
//     setMarkers(updatedMarkers);
//     AsyncStorage.setItem("waste_reports", JSON.stringify(updatedMarkers));
//     setSelectedMarker(null);
//     setCardExpanded(false);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#2196F3" />
//         </View>
//       ) : location ? (
//         <MapView
//           ref={mapRef}
//           provider={PROVIDER_GOOGLE}
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           onPress={unexpandCard}
//         >
//           {markers.map((marker, index) =>
//             marker?.latitude != null && marker?.longitude != null ? (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 title={marker.username || "Unknown"}
//                 description={marker.description || "No description"}
//                 onPress={() => handleMarkerPress(marker)}
//                 pinColor="#EC407A"
//               />
//             ) : null
//           )}
//         </MapView>
//       ) : (
//         <Text>Error loading map</Text>
//       )}

//       {selectedMarker && (
//         <Animated.View
//           style={[styles.card, { height: cardHeight }]}
//           {...panResponder.panHandlers}
//         >
//           <Text style={styles.cardTitle}>
//             {selectedMarker.title || "Waste Report"}
//           </Text>
//           <Text style={styles.cardText}>
//             Location: {selectedMarker.location || "Unknown"}
//           </Text>
//           <Text style={styles.cardText}>
//             User: {selectedMarker.username || "Anonymous"}
//           </Text>
//           <Text style={styles.cardText}>
//             Category: {selectedMarker.category || "N/A"}
//           </Text>

//           {cardExpanded && selectedMarker.imageUrl && (
//             <Image
//               source={{ uri: selectedMarker.imageUrl }}
//               style={styles.cardImage}
//             />
//           )}

//           {/* Delete Button */}
//           <TouchableOpacity
//             style={styles.deleteButton}
//             onPress={() => deleteMarker(selectedMarker)}
//           >
//             <Icon name="delete" size={20} color="white" />
//             <Text style={styles.deleteButtonText}>Delete</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     padding: 15,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 5,
//   },
//   cardText: {
//     fontSize: 14,
//     color: "#555",
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   deleteButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "red",
//     paddingVertical: 10,
//     justifyContent: "center",
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 5,
//   },

//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default MapsScreen;

// import React, { useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Animated,
//   Alert,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   PanResponder,
//   StyleSheet,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [cardExpanded, setCardExpanded] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const cardHeight = useRef(new Animated.Value(100)).current;
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadWasteReports();
//     getLocation();
//   }, []);

//   const loadWasteReports = async () => {
//     try {
//       const wasteReports =
//         JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
//       setMarkers(wasteReports);
//     } catch (error) {
//       console.error("Error loading waste reports:", error);
//       Alert.alert("Error", "Failed to load waste data.");
//     }
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         if (gestureState.dy < 0 && !cardExpanded) {
//           // Dragging up
//           handleMarkerPress(selectedMarker);
//         } else if (gestureState.dy > 0 && cardExpanded) {
//           // Dragging down
//           unexpandCard(selectedMarker);
//         }
//       },
//     })
//   ).current;

//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Enable location permissions in settings"
//         );
//         return;
//       }
//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);
//       setLoading(false);
//     } catch (error) {
//       console.error("Location error:", error);
//       Alert.alert("Error", "Failed to get location");
//       setLoading(false);
//     }
//   };

//   const handleMarkerPress = (marker) => {
//     setSelectedMarker(marker);
//     setCardExpanded(true);

//     Animated.timing(cardHeight, {
//       toValue: 460, // Expanded height
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const unexpandCard = () => {
//     Animated.timing(cardHeight, {
//       toValue: 200, // Collapsed height
//       duration: 300,
//       useNativeDriver: false,
//     }).start(() => setCardExpanded(false));
//   };

//   const deleteMarker = (markerToDelete) => {
//     const updatedMarkers = markers.filter(
//       (marker) => marker !== markerToDelete
//     );
//     setMarkers(updatedMarkers);
//     AsyncStorage.setItem("waste_reports", JSON.stringify(updatedMarkers));
//     setSelectedMarker(null);
//     setCardExpanded(false);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#2196F3" />
//         </View>
//       ) : location ? (
//         <MapView
//           ref={mapRef}
//           provider={PROVIDER_GOOGLE}
//           style={{ flex: 1 }}
//           region={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           onPress={unexpandCard}
//         >
//           {markers.map((marker, index) =>
//             marker?.latitude != null && marker?.longitude != null ? (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 title={marker.username || "Unknown"}
//                 description={marker.description || "No description"}
//                 onPress={() => handleMarkerPress(marker)}
//                 pinColor="#EC407A"
//               />
//             ) : null
//           )}
//         </MapView>
//       ) : (
//         <Text>Error loading map</Text>
//       )}

//       {selectedMarker && (
//         <Animated.View
//           style={[styles.card, { height: cardHeight }]}
//           {...panResponder.panHandlers}
//         >
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardTitle}>
//               {selectedMarker.title || "Waste Report"}
//             </Text>
//             <Text style={styles.cardText}>
//               Location: {selectedMarker.location || "Unknown"}
//             </Text>
//           </View>

//           {cardExpanded && (
//             <View style={styles.expandedContent}>
//               <Text style={styles.cardText}>
//                 User: {selectedMarker.username || "Anonymous"}
//               </Text>
//               <Text style={styles.cardText}>
//                 Category: {selectedMarker.category || "N/A"}
//               </Text>

//               {selectedMarker.imageUrl && (
//                 <Image
//                   source={{ uri: selectedMarker.imageUrl }}
//                   style={styles.cardImage}
//                 />
//               )}

//               {/* Delete Button */}
//               <TouchableOpacity
//                 style={styles.deleteButton}
//                 onPress={() => deleteMarker(selectedMarker)}
//               >
//                 <Icon name="delete" size={20} color="white" />
//                 <Text style={styles.deleteButtonText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     padding: 15,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   cardHeader: {
//     marginBottom: 10,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 5,
//   },
//   cardText: {
//     fontSize: 14,
//     color: "#555",
//   },
//   expandedContent: {
//     marginTop: 10,
//   },
//   cardImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   deleteButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "red",
//     paddingVertical: 10,
//     justifyContent: "center",
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 5,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default MapsScreen;

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Animated,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  PanResponder,
  StyleSheet,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-remix-icon";

const MapsScreen = () => {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [cardExpanded, setCardExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const cardHeight = useRef(new Animated.Value(0)).current;
  const mapRef = useRef(null);

  // Card height presets
  const COLLAPSED_HEIGHT = 200;
  const EXPANDED_HEIGHT = 520;

  useEffect(() => {
    loadWasteReports();
    getLocation();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (event, gestureState) => {
        if (!cardExpanded && gestureState.dy < -30) {
          // Drag up to expand
          expandCard();
        } else if (cardExpanded && gestureState.dy > 30) {
          // Drag down to collapse
          unexpandCard();
        } else if (!cardExpanded && gestureState.dy > 30) {
          // Drag down to close
          closeCard();
        } else {
          Animated.spring(cardHeight, {
            toValue: cardExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setCardExpanded(false);
    Animated.timing(cardHeight, {
      toValue: COLLAPSED_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const expandCard = () => {
    Animated.timing(cardHeight, {
      toValue: EXPANDED_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setCardExpanded(true));
  };

  const unexpandCard = () => {
    Animated.timing(cardHeight, {
      toValue: COLLAPSED_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setCardExpanded(false));
  };

  const closeCard = () => {
    Animated.timing(cardHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setSelectedMarker(null);
      setCardExpanded(false);
    });
  };

  
  const loadWasteReports = async () => {
    try {
      const wasteReports =
        JSON.parse(await AsyncStorage.getItem("waste_reports")) || [];
      setMarkers(wasteReports);
    } catch (error) {
      console.error("Error loading waste reports:", error);
      Alert.alert("Error", "Failed to load waste data.");
    }
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Enable location permissions in settings"
        );
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(coords);
      setLoading(false);
    } catch (error) {
      console.error("Location error:", error);
      Alert.alert("Error", "Failed to get location");
      setLoading(false);
    }
  };

  const deleteMarker = (markerToDelete) => {
    const updatedMarkers = markers.filter(
      (marker) => marker !== markerToDelete
    );
    setMarkers(updatedMarkers);
    AsyncStorage.setItem("waste_reports", JSON.stringify(updatedMarkers));
    setSelectedMarker(null);
    setCardExpanded(false);
  };

  const mapCustomStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
        </View>
      ) : location ? (
        <>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            onPress={unexpandCard}
            customMapStyle={mapCustomStyle}
          >
            {markers.map((marker, index) =>
              marker?.latitude != null && marker?.longitude != null ? (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.username || "Unknown"}
                  description={marker.description || "No description"}
                  onPress={() => handleMarkerPress(marker)}
                  pinColor="#EC407A"
                />
              ) : null
            )}
          </MapView>

          {/* Refresh Button */}
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={loadWasteReports}
          >
            <Icon name="ri-refresh-line" size={20} color="#6B6B6C" />
          </TouchableOpacity>
        </>
      ) : (
        <Text>Error loading map</Text>
      )}

      {selectedMarker && (
        <Animated.View
          style={[styles.card, { height: cardHeight }]}
          {...panResponder.panHandlers}
        >
          <View style={styles.cardHeader}>
            <Icon
              name={cardExpanded ? "ri-arrow-down-wide-fill" : "ri-arrow-up-wide-fill"}
              size={30}
              color="#666"
              style={{
                alignSelf: 'center',  // Correct alignment for single elements
                borderWidth: 1,
                borderColor: "red"
              }}
            />
            <Text style={styles.cardTitle}>
              {selectedMarker.title || "Waste Report"}
            </Text>
            <Text style={styles.cardText}>
              Location: {selectedMarker.location || "Unknown"}
            </Text>
          </View>

          {cardExpanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.cardText}>
                User: {selectedMarker.username || "Anonymous"}
              </Text>
              <Text style={styles.cardText}>
                Category: {selectedMarker.category || "N/A"}
              </Text>

              {selectedMarker.imageUrl && (
                <Image
                  source={{ uri: selectedMarker.imageUrl }}
                  style={styles.cardImage}
                />
              )}

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteMarker(selectedMarker)}
              >
                <Icon name="ri-delete-bin-line" size={20} color="white" />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
  expandedContent: {
    marginTop: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 10,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  refreshButton: {
    position: "absolute",
    top: 70,
    right: 10,
    backgroundColor: "#BABEC1",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapsScreen;
