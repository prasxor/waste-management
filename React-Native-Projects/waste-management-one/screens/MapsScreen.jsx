// import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { styles } from '../App';

// const MapsScreen = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log("Location permission not granted");
//         return;
//       }
//       let loc = await Location.getCurrentPositionAsync({});
//       setLocation(loc.coords);
//     })();
//   }, []);

//   return (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       style={styles.map}
//       initialRegion={{
//         latitude: location?.latitude || 37.78825,
//         longitude: location?.longitude || -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     >
//       {location && <Marker coordinate={location} title="Your Location" />}
//     </MapView>
//   );
// };

// export default MapsScreen;

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet } from 'react-native';

const MapsScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Location permission not granted");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map} // Now using locally defined styles
      initialRegion={{
        latitude: location?.latitude || 37.78825,
        longitude: location?.longitude || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {location && <Marker coordinate={location} title="Your Location" />}
    </MapView>
  );
};

// Define styles locally
const styles = StyleSheet.create({
  map: {
    flex: 1, // This is mandatory for MapView to render
  },
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
});

export default MapsScreen;