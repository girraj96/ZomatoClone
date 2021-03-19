import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, } from 'react-native'
import fontFamily from '../styles/fontFamily'

export default function FoodItemFlat(props) {
    const {data}=props
    return (
        <View style={styles.flatMainView}>
            <Image source={data.itemImg} style={styles.imgView} resizeMode="cover"/> 
            <View style={styles.addButtonView}>
            <Text style={styles.priceTxt}>₹{data.itemPrice}</Text>
            <TouchableOpacity style={styles.addButton}>

            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flatMainView:{
        width:"50%",
        alignSelf:"center",
    },
    imgView:{
        height:180,
        width:180,
    },
    priceTxt:{
        fontFamily:fontFamily.medium,
        fontSize:16
    },
    addButtonView:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    addButton:{
        height:60,
        width:60,
        borderRadius:5,
        backgroundColor:colors
    }
})

