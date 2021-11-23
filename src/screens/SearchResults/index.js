import React from "react"
import { View, Text, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from './styles'

import RouteMap from '../../components/RouteMap'
import UberTypes from "../../components/UberTypes";
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchResults = (props) => {

    const route = useRoute();
    //console.log(route.params);

    const {originPlace, destinationPlace} = route.params

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 450}}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>

            <View style={{height: 450}}>
                <View style={styles.promotionContainer}>
                    <Ionicons name={'pricetag'} size={16} color="#42d472"/>
                    <Text style={styles.promotionText}>
                        $5 off promotion applied
                    </Text>
                </View>
            
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;