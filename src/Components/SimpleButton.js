import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'

export default function SimpleButton(props) {
    const {buttonName, buttonColor, textColor,isIconVisible,iconSource,_onSimpleBtn}=props
    return (
       <TouchableOpacity style={{
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:buttonColor,
        borderRadius:5,
        elevation:10,
       }}
       onPress={_onSimpleBtn}>
           {isIconVisible&&<Image source={iconSource} style={styles.iconImg}/>}
           <Text style={{
               fontFamily:fontFamily.medium,
               color:textColor
           }}>{buttonName}</Text>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    iconImg:{
        height:moderateScaleVertical(30),
        width:moderateScale(30),
        resizeMode:"contain",
        position:"absolute",
        left:10
    }
})

