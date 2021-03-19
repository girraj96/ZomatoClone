import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';



const Stack=createStackNavigator();

export default function Routes() {
    const userData=useSelector(state=>{
        return (state.auth.userData);
    })
    console.log("in userData=>",userData)
    return (
       <NavigationContainer>
           <Stack.Navigator>
               {AuthStack()}
               {MainStack()}
           </Stack.Navigator>
       </NavigationContainer>
    )
}
