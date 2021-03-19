import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import { Home } from '../Screens';

const Stack=createStackNavigator();
export default function MainStack() {
    return (
        <>
        <Stack.Screen name={navigationStrings.HOME} component={Home} options={{headerShown:false}} />
        </>
    )
}
