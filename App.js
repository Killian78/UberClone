import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, PermissionsAndroid, Platform, View, Text } from 'react-native';
import * as Location from 'expo-location';

import Router from './src/navigation/Root';

Location.installWebGeolocationPolyfill()

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access Location",
          message: "UberClone needs access to your location",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log('You can access the location on Android')
      } else {
        console.log('Location permission denied on Android')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const iosPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted'){
        console.log('You can access the location on iOS')
      } else {
        console.log('Location permission denied on iOS')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android'){
      androidPermission();
    } else{
      iosPermission()
    }
  }, [])

  return (
    <>
      <Router />

      <StatusBar barStyle="dark-content" />
    </>
  );
}