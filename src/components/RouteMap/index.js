/* eslint-disable react/jsx-key */
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env';

import cars from '../../../assets/data/cars'

const RouteMap = (props) => {

    const origin = {latitude: 28.450627, longitude: -16.263045};
    const destination = {latitude: 28.450127, longitude: -16.269045};

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: '100%', width: '100%'}}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination} 
                apikey={API_KEY}
                strokeWidth={5}
            />
            <Marker
                coordinate={origin}
                title={'Origin'}
            />
            <Marker
                coordinate={destination}
                title={'Destination'}
            />
        </MapView>
    );
};

export default RouteMap