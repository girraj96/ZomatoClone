import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, Image} from 'react-native'
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';



export default function RoundButton(props) {
    const {_onRoundBtnClick}=props;
    return (
        <TouchableOpacity style={styles.redArrowTouch} onPress={_onRoundBtnClick}>
        <Image source={imagePath.red_arrow} style={styles.redArrowIcon}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    redArrowTouch:{
        height:70,
        width:70,
        backgroundColor:colors.white,
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center"
    },
    redArrowIcon:{
        height:"70%",
        width:"70%",
        resizeMode:"contain"
    }
})
