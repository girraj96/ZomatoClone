import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import { moderateScale } from '../styles/responsiveSize'
import BorderTxtInput from './BorderTxtInput'

export default function SearchBox() {
    return (
        <View style={styles.searchBoxView}>
            <Image source={imagePath.search_icon} style={styles.searchIcon}/>
            <BorderTxtInput placeholder={"Restaurant name, cuisine, or a dish..."}/>
        </View>
    )
}
const styles = StyleSheet.create({
    searchBoxView:{
        height:moderateScale(50),
        backgroundColor:colors.white,
        borderRadius:10,
        elevation:5,
        flexDirection:"row",
        borderWidth:1,
        borderColor:colors.light_grey,
        paddingHorizontal:10,
        marginHorizontal:10
       
    },
    searchIcon:{
        height:moderateScale(25),
        width:moderateScale(25),
        resizeMode:"contain",
        alignSelf:"center"
    }
})

