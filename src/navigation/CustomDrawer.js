import React from "react";
import { View, Text, Pressable } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import styles from "../components/CovidMessage/styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: '#212121', paddingLeft: 15, paddingBottom: 15, paddingTop: 15}}>
                
                {/* User Row */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: '#cacaca', 
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginRight: 15
                    }}/>

                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Killian Cambus</Text>
                        <Text style={{color: 'lightgrey'}}>5.00 *</Text>    
                    </View>

                </View>

                {/* Message Row*/}
                <View style={{
                    borderTopWidth: 1, 
                    borderBottomWidth: 1, 
                    borderColor: '#919191',
                    paddingVertical: 20,
                    marginVertical: 20
                }}>
                    <Pressable
                        onPress={() => {}}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginRight: 15
                        }}
                        >
                        <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
                            Messages
                        </Text>
                        {/* Icon*/}
                        <MaterialIcons name='arrow-forward-ios' color='white' size={18} />
                    </Pressable>
                </View>

                {/* Do more Row  */}
                <Pressable 
                    onPress={() => {console.warm('Do more with your account')}}>
                    <Text style={{color: '#dddddd', paddingVertical:5}}>Do more with your account</Text>
                </Pressable>

                {/* Make money Row  */}
                <Pressable 
                    onPress={() => {console.warm('Make money driving')}}>
                    <Text style={{color: 'white', paddingVertical:5 }}>Make money driving</Text>
                </Pressable>

            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;