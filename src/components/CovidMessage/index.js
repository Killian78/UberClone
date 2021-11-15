import React from 'react';
import { View, Text } from 'react-native';

import style from "./styles";

const CovidMessage = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>Travel only if is necessary</Text>
            <Text style={style.text}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
                Le Lorem Ipsum est le faux texte standard de limprimerie </Text>
            <Text style={style.learnMore}>Learn more</Text>
        </View>
    );
};

export default CovidMessage;