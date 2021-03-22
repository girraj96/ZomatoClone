import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,MyAccount} from "../Screens"
import { Image, View, Text } from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

export default function TabRoutes() {

    const GoOut=()=>{
        return(
            <View>
                <Text>Go Out screen</Text>
            </View>
        )
    }

    const Pro=()=>{
        return(
            <View>
                <Text>Go Out screen</Text>
            </View>
        )
    }
    const Donate=()=>{
        return(
            <View>
                <Text>Go Out screen</Text>
            </View>
        )
    }
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor:colors.black,
           
        }}
        >
          <Tab.Screen name={navigationStrings.HOME} component={Home} options={{
              tabBarLabel:"Order",
              tabBarIcon:({focused, color, size})=>(
                  <Image source={imagePath.bag}
                  style={{
                      width:size,
                      height:size,
                      tintColor: focused?colors.black:colors.light_grey_tabRoutes,
                

                      
                  }}
                  />
              )
          }} />
          <Tab.Screen name="goOut" component={GoOut}  options={{
              tabBarLabel:"Go Out",
              
              tabBarIcon:({focused, color, size})=>(
                  <Image source={imagePath.go_out}
                  style={{
                      width:size,
                      height:size,
                      tintColor: focused?colors.black:colors.light_grey_tabRoutes
                      
                  }}
                  />
              )
          }}/>
          <Tab.Screen name="pro" component={Pro}  options={{
              tabBarLabel:"Pro",
              tabBarIcon:({focused, color, size})=>(
                  <Image source={imagePath.pro}
                  style={{
                      width:size,
                      height:size,
                      tintColor: focused?colors.black:colors.light_grey_tabRoutes
                  }}
                  />
              )
          }}/>
          <Tab.Screen name="donate" component={Donate}  options={{
              tabBarLabel:"Donate",
              tabBarIcon:({focused, color, size})=>(
                  <Image source={imagePath.donate}
                  style={{
                      width:size,
                      height:size,
                      tintColor: focused?colors.black:colors.light_grey_tabRoutes
                      
                  }}
                  />
              )
          }}/>
          <Tab.Screen name={navigationStrings.MY_ACCOUNT} component={MyAccount}  options={{
              tabBarLabel:"Account",
              tabBarIcon:({focused, color, size})=>(
                  <Image source={imagePath.account}
                  style={{
                      width:size,
                      height:size,
                      tintColor: focused?colors.black:colors.light_grey_tabRoutes
                      
                  }}
                  />
              )
          }}/>

        </Tab.Navigator>
    )
}
