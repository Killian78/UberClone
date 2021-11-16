import React, { useState, useEffect } from "react"
import { View, Text, TextInput, SafeAreaView } from "react-native";
import styles from "./styles";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


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
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}
                />

            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;