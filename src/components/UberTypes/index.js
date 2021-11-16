import React from "react"
import { View, Text, Pressable } from "react-native";

import styles from './styles'

import UberTypeRow from '../UberTypeRow'
import typesData from '../../../assets/data/types'

const UberTypes = (props) => {

    const confirm = () => {
        console.warn("Confirm")
    }

    return (
        <View style={styles.container}>
            {typesData.map(type=><UberTypeRow type={type} />)}

            <Pressable onPress={confirm} style={{

                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center'
            }}>
                <Text style={{ color: "white", fontWeight: '500', fontSize: 20}}>
                    Confirm Uber
                </Text>
            </Pressable>

        </View>
    );
};

export default UberTypes;