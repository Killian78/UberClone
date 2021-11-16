import React from "react"
import { View, Text } from "react-native";

import styles from './styles'

import HomeMap from '../../components/HomeMap'
import UberTypes from "../../components/UberTypes";
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchResults = (props) => {
    return (
        <View>
            <HomeMap />

            <View style={styles.promotionContainer}>
                <Ionicons name={'pricetag'} size={16} color="#42d472"/>
                <Text style={styles.promotionText}>
                    $5 off promotion applied
                </Text>
            </View>

            <UberTypes />
        </View>
    );
};

export default SearchResults;