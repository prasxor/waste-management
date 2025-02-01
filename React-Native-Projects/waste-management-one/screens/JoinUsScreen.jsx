import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { styles } from '../App';

const JoinUsScreen = () => (
  <View style={styles.container}>
    <Text>Join Us</Text>
  </View>
);

const styles = StyleSheet.create({
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

export default JoinUsScreen;