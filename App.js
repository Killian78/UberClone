import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./src/screens/HomeScreen"
import DestinationSearch from "./src/screens/DestinationSearch"
import SearchResults from './src/screens/SearchResults';

export default function App() {
  return (
    <View style={styles.container}>
      
      <SearchResults />

      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
