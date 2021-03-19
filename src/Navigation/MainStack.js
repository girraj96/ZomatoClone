import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import { CartItems, Home,} from '../Screens';

const Stack=createStackNavigator();
export default function MainStack() {
    return (
        <>
        <Stack.Screen name={navigationStrings.HOME} component={Home} options={{headerShown:false}} />
        <Stack.Screen name={navigationStrings.CART_ITEMS} component={CartItems} options={{headerShown:false}} />
        </>
    )
}
