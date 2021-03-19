import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, } from 'react-native'
import fontFamily from '../styles/fontFamily';
import colors from "../styles/colors"

export default function FoodItemFlat(props) {
    const {data, _onItemClick}=props
    return (
        <View style={styles.flatMainView}>
            <Image source={data.itemImg} style={styles.imgView} resizeMode="cover"/> 
            <Text>{data.restaurantsName}</Text>
            <View style={styles.addButtonView}>
            <Text style={styles.priceTxt}>₹{data.itemPrice}</Text>
            <TouchableOpacity style={styles.addButton} onPress={()=>_onItemClick(data.id)}>
                <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flatMainView:{
        width:"50%",
      
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
        justifyContent:"space-between",
        marginVertical:5
    },
    addTxt:{
        color:colors.white,
        fontSize:16
    },
    addButton:{
        height:40,
        width:80,
        borderRadius:5,
        backgroundColor:colors.theme_color,
        alignItems:"center",
        justifyContent:"center",
        marginRight:15
    }
})

