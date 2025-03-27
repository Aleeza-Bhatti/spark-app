import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#FFEAC5', '#F9B78F']}
      style={styles.container}
    >
      <Text style={styles.title}>Word Detective</Text>
      <Image source={require('./assets/logo.png')} style={styles.image} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Black text to make it visible
  },
});
