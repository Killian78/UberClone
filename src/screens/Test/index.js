import React from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from "@env";

const Test = (props) => {

  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  const GOOGLE_MAPS_APIKEY = {API_KEY};

  return (
   
    <MapView initialRegion={
      {latitude: 28.450627,
      longitude: -16.263045,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>

  );
}

export default Test;