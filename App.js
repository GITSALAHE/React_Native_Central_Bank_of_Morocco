import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
