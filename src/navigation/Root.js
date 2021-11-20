import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    );
};

export default RootNavigator;