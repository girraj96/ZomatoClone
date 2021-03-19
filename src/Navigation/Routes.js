import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { connect } from 'react-redux';



const Stack=createStackNavigator();

function Routes(props) {
  
     const {res}=props;
     console.log(" in routes=>",res)
    return (
       <NavigationContainer>
           <Stack.Navigator>
                {res&&<>{MainStack()}</>}
                {AuthStack()}
           </Stack.Navigator>
       </NavigationContainer>
    )
}

const mapStateToProps=state=>{
    return {
        res: state.auth.res
    }
}

export default connect(mapStateToProps)(Routes);