// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from 'expo-location';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const cardHeight = useRef(new Animated.Value(0)).current;
//   const mapRef = useRef(null);

//   // Sample markers (replace with your data source)
//   const sampleMarkers = [
//     {
//       id: 1,
//       latitude: 37.78825,
//       longitude: -122.4324,
//       title: 'Location 1',
//       description: 'Sample location 1 description',
//     },
//     {
//       id: 2,
//       latitude: 37.77493,
//       longitude: -122.41942,
//       title: 'Location 2',
//       description: 'Sample location 2 description',
//     },
//     {
//       id: 3,
//       latitude: 17.3718499,
//       longitude: 78.510475,
//       title: 'Acme Degree College',
//       description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nisl.',
//     },
//     {
//       id: 4,
//       latitude: 37.77493,
//       longitude: -122.41942,
//       title: 'Location 2',
//       description: 'Sample location 2 description',
//     },
//   ];

//   // Fetch user location and handle permissions
//   const getLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission denied', 'Enable location permissions in settings');
//         return;
//       }

//       const { coords } = await Location.getCurrentPositionAsync({
//         accuracy: Location.Accuracy.High,
//       });
//       setLocation(coords);

//       // Center map on user location after fetch
//       if (mapRef.current) {
//         mapRef.current.animateToRegion({
//           latitude: coords.latitude,
//           longitude: coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         });
//       }
//     } catch (error) {
//       console.error('Location error:', error);
//       Alert.alert('Error', 'Failed to get location');
//     }
//   };

//   useEffect(() => {
//     getLocation();
//     setMarkers(sampleMarkers);
//   }, []);

//   // Handle marker press with animation
//   const handleMarkerPress = (marker) => {
//     setSelectedMarker(marker);
//     Animated.spring(cardHeight, {
//       toValue: 150,
//       useNativeDriver: false,
//     }).start();
//   };

//   // Reset card position when closing
//   const closeCard = () => {
//     Animated.spring(cardHeight, {
//       toValue: 0,
//       useNativeDriver: false,
//     }).start(() => setSelectedMarker(null));
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         ref={mapRef}
//         provider={PROVIDER_GOOGLE}
//         style={styles.map}
//         region={
//           location && {
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }
//         }
//         showsUserLocation={true} // Enable native user location dot
//         showsMyLocationButton={false} // Disable default button
//       >
//         {/* Custom user location marker (optional) */}
//         {location && (
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title="Your Location"
//             pinColor="#2196F3"
//           />
//         )}

//         {/* Other markers */}
//         {markers.map((marker) => (
//           <Marker
//             key={marker.id}
//             coordinate={marker}
//             title={marker.title}
//             description={marker.description}
//             onPress={() => handleMarkerPress(marker)}
//           />
//         ))}
//       </MapView>

//       {/* Bottom information card */}
//       <Animated.View style={[styles.card, { height: cardHeight }]}>
//         {selectedMarker && (
//           <>
//             <Text style={styles.cardTitle}>{selectedMarker.title}</Text>
//             <Text style={styles.cardDescription}>{selectedMarker.description}</Text>
//             <TouchableOpacity style={styles.closeButton} onPress={closeCard}>
//               <Icon name="close" size={20} color="#666" />
//             </TouchableOpacity>
//           </>
//         )}
//       </Animated.View>

//       {/* Custom location button */}
//       <TouchableOpacity
//         style={styles.locationButton}
//         onPress={() => location && mapRef.current?.animateToRegion({
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         })}
//       >
//         <Icon name="my-location" size={24} color="#FFF" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   card: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: -5 },
//     zIndex: 1000,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   cardDescription: {
//     fontSize: 16,
//     color: '#666',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 16,
//     right: 16,
//   },
//   locationButton: {
//     position: 'absolute',
//     bottom: 100,
//     right: 20,
//     backgroundColor: '#2196F3',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
// });

// export default MapsScreen;

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
  Image,
  PanResponder,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialIcons";

const MapsScreen = () => {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [cardExpanded, setCardExpanded] = useState(false);
  const cardHeight = useRef(new Animated.Value(100)).current; // Initial height for unexpanded card
  const mapRef = useRef(null);

  // Sample markers (replace with your data source)
  const sampleMarkers = [
    {
      id: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      title: "Location 1",
      description: "Sample location 1 description",
      image:
        "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
    {
      id: 2,
      latitude: 37.77493,
      longitude: -122.41942,
      title: "Location 2",
      description: "Sample location 2 description",
      image:
        "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
    {
      id: 3,
      latitude: 17.3718499,
      longitude: 78.510475,
      title: "Acme Degree College",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    },
  ];

  // Fetch user location and handle permissions
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

      // Center map on user location after fetch
      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    } catch (error) {
      console.error("Location error:", error);
      Alert.alert("Error", "Failed to get location");
    }
  };

  useEffect(() => {
    getLocation();
    setMarkers(sampleMarkers);
  }, []);

  // Handle marker press
  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setCardExpanded(false); // Reset card to unexpanded state
    Animated.spring(cardHeight, {
      toValue: 100, // Unexpanded height
      useNativeDriver: false,
    }).start();
  };

  // Handle card expand/collapse
  const toggleCard = () => {
    setCardExpanded(!cardExpanded);
    Animated.spring(cardHeight, {
      toValue: cardExpanded ? 100 : 400, // Expanded height
      useNativeDriver: false,
    }).start();
  };

  // Handle card drag
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) {
          // Dragging up
          setCardExpanded(true);
          Animated.spring(cardHeight, {
            toValue: 600, // Expanded height
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dy > 0) {
          // Dragging down
          setCardExpanded(false);
          Animated.spring(cardHeight, {
            toValue: 100, // Unexpanded height
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  // Reset card when clicking on the map
  const handleMapPress = () => {
    setSelectedMarker(null);
    Animated.spring(cardHeight, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={
          location && {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        }
        showsUserLocation={true}
        showsMyLocationButton={false}
        onPress={handleMapPress} // Close card on map press
      >
        {/* User location marker */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            pinColor="#26C6DA"
          />
        )}

        {/* Other markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
            pinColor="#EC407A"
          />
        ))}
      </MapView>

      {/* Bottom card */}
      {selectedMarker && (
        <Animated.View
          style={[styles.card, { height: cardHeight }]}
          {...panResponder.panHandlers}
        >
          <View style={styles.cardContent}>
            <Icon
              name="expand-less"
              size={30}
              color="black"
              style={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            />
            <Text style={styles.cardTitle}>{selectedMarker.title}</Text>
            <Text style={styles.cardDescription} numberOfLines={1}>
              {selectedMarker.description}
            </Text>

            {cardExpanded && (
              <>
                <Text style={styles.distanceText}></Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.cleanButton}>
                    <Text style={styles.buttonText}>I’ll Clean This</Text>
                  </TouchableOpacity>

                  {/* Waste Cleared Button */}
                  <TouchableOpacity style={styles.clearedButton}>
                    <Text style={styles.buttonText}>Waste Cleared</Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{ uri: selectedMarker.image }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
              </>
            )}
          </View>
        </Animated.View>
      )}

      {/* Your Location button */}
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() =>
          location &&
          mapRef.current?.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        }
      >
        <Icon name="my-location" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  card: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
    padding: 16,
    zIndex: 1000,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  distanceText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 8,
  },
  locationButton: {
    position: "absolute",
    bottom: 180,
    right: 20,
    backgroundColor: "#2196F3",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cleanButton: {
    backgroundColor: "#28A745", // Green for action
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10, // Adds spacing between buttons
    alignItems: "center",
  },
  clearedButton: {
    backgroundColor: "#424874", // Gray for neutral confirmation
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10, // Adds spacing between buttons
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MapsScreen;
