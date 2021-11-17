import React, { useState, useEffect } from "react"
import { View, Text, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";
import {API_KEY} from "@env";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./PlaceRow";

const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn('Redirect to result')
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='From?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autocompleteContainer,
                            top: 55
                        },
                        listView: {
                            ...styles.listView,
                            top: 65
                        },
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    
                />

                <View style={styles.circle}>
                    
                </View>
                <View style={styles.line}>
                    
                </View>
                <View style={styles.square}>
                    
                </View>

            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;