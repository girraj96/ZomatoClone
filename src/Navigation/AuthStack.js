import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import { Home, Login, OtpVerification, Register, SplashScreen, VerifiedOTP } from '../Screens';

const Stack=createStackNavigator();
export default function AuthStack() {
    return (
        <>
        <Stack.Screen name={navigationStrings.SPLASH_SCREEN} component={SplashScreen} options={{headerShown:false}}/>
         <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification} options={{headerShown:false}}/>
         <Stack.Screen name={navigationStrings.VERIFIED_OTP} component={VerifiedOTP} options={{headerShown:false}}/>
        <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={navigationStrings.REGISTER} component={Register} options={{headerShown:false}}/>
        </>
    )
}
