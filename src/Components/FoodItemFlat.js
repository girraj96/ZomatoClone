import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, } from 'react-native'
import fontFamily from '../styles/fontFamily';
import colors from "../styles/colors"

export default function FoodItemFlat(props) {
    const {data, _onItemClick, _onProductClick}=props
    return (
        <View style={styles.flatMainView}>
            <TouchableOpacity onPress={()=>_onProductClick(data.id)}>
            <Image source={data.itemImg} style={styles.imgView} resizeMode="cover"/>
            </TouchableOpacity>
            <Text style={styles.restaurantsNameTxt}>{data.restaurantsName}</Text>
            <View style={styles.ratingsView}>
                <Image source={data.ratingImg} style={styles.ratingImg}/>
                <Text style={styles.ratingsPointTxt}>{data.ratingPoint}</Text>
            </View>
            <Text style={styles.foodTypeTxt}>{data.foodType}</Text>
            <Text style={styles.priceTxt}>₹{data.itemPrice} </Text>
            <TouchableOpacity style={styles.addButton} onPress={()=>_onItemClick(data)}>
                <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    flatMainView:{
        width:"50%",
        paddingHorizontal:5,
        marginVertical:10
    },
    imgView:{
        height:160,
        width:"100%",
    },
    priceTxt:{
        fontFamily:fontFamily.medium,
        fontSize:16,
        marginVertical:5
    },
 
    addTxt:{
        color:colors.white,
        fontSize:16
    },
    addButton:{
        height:35,
        width:"100%",
        borderRadius:2,
        backgroundColor:colors.theme_color,
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center",
    },
    restaurantsNameTxt:{
        fontFamily:fontFamily.bold,
        fontSize:18,
    },
    foodTypeTxt:{
        fontFamily:fontFamily.regular,
        fontSize:15
    },
    ratingsView:{
        flexDirection:"row",
     alignItems:"center"
    },
    ratingsPointTxt:{
        fontFamily:fontFamily.bold, 
        fontSize:15, 
        marginHorizontal:5
    },
    ratingImg:{
        height:15,
        marginLeft:-5
    }
})

