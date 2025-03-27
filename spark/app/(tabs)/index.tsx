import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']}
      style={styles.container}
      >
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});