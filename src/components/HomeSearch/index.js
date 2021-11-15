import React from 'react';
import { View, Text } from 'react-native';

import style from './styles.js';

import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"

const HomeSearch = (props) => {
    return (
        <View style={style.container}>
            <View style={style.inputBox}>

                <Text style={style.inputText}>Where To ?</Text>

                <View style={style.timeContainer}>

                    <AntDesign name="clockcircle" size={16} color={"#535353"}/>

                    <Text>Now</Text>

                    <MaterialIcons name="keyboard-arrow-down" size={16} />

                </View>

            </View>

            <View style={style.row}>
                <View style={style.iconContainer}>      
                    <AntDesign name="clockcircle" size = {20} color={"#fff"}/>            
                </View>             
                <Text style={style.destinationText}>Spin Nightclub</Text>          
            </View>

            <View style={style.row}>
                <View style={[style.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name="home" size = {20} color={"#fff"}/>
                </View>
                <Text style={style.destinationText}>Home</Text>            
            </View>
        </View>
    );
};

export default HomeSearch