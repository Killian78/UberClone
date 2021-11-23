/* eslint-disable react/jsx-key */
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env';

import cars from '../../../assets/data/cars'

const RouteMap = ({origin, destination}) => {
    
    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };
    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    //console.log(originLoc)

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: '100%', width: '100%'}}
            showsUserLocation={true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc} 
                apikey={API_KEY}
                strokeWidth={5}
            />
            <Marker
                coordinate={originLoc}
                title={'Origin'}
            />
            <Marker
                coordinate={destinationLoc}
                title={'Destination'}
            />
        </MapView>
    );
};

export default RouteMap