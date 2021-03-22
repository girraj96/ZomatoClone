import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../constants/navigationStrings'
import colors from '../../styles/colors'

class ProductDetails extends Component {

    _onAddCart=()=>{
        const {clickedItem }=this.props.route.params;
        const {navigation}=this.props;
        navigation.navigate(navigationStrings.HOME,{clickedItemId:clickedItem.id});       
 
    }

    render() {
        const {clickedItem}=this.props.route.params
        return (
            <WrapperContainer>
            <Header screenNameTxt="Item Details"  isBackHeaderVisible={true} iscartIconVisible={true}/>
            <View style={styles.productCard}>
                <Text style={styles.brandText}>Brand:  {clickedItem.foodType}</Text>
                <Text style={styles.brandDescText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Image source={clickedItem.itemImg } style={styles.itemImage} resizeMode="cover"></Image>
                <View style={styles.priceView}><Text style={styles.mrpText}>MRP:</Text>
                    <Text style={styles.priceText}>{clickedItem.itemPrice}</Text>
                </View>
                <View style={styles.deliveryView}> 
                    <Text style={styles.freeDeliveryText}>FREE delivery:</Text>
                    <Text style={styles.dateText}>Friday, March 5</Text>
                    <Text style={styles.freeDeliveryText}>Details</Text> 

                </View>
                </View>
             <View style={styles.buttonView}>
           

                <TouchableOpacity style={styles.addToCartButton} onPress={this._onAddCart}>
                    <Text style={{color:colors.white}}>Add to Cart</Text>
                </TouchableOpacity>
             </View>
            
            </WrapperContainer>
        )
    }
}


export default ProductDetails;

const styles = StyleSheet.create({
    productCard:{
        backgroundColor:"white",
        width:"100%",
        paddingHorizontal:15,
        paddingVertical:5
    },
    buttonView:{
        width:"100%",
        alignItems:"center",
        marginTop:10
    },
    brandText: {
        color: "#66ccce",
        alignSelf: "flex-start",
    },
    brandDescText: {
        color: "grey",
        fontSize: 12,
        width: "95%",

    },
    priceText: {
        fontSize: 25,
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    priceView: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    mrpText: {
        alignSelf: "flex-end"
    },
    deliveryView:{
        flexDirection:"row",
        alignSelf: "flex-start",
        marginHorizontal: 5,

    },
    freeDeliveryText:{
        fontSize:14,
        color: "#66ccce",
    },
    dateText:{
        marginHorizontal:5
    },

    addToCartButton:{
        backgroundColor:colors.theme_color,
        height:45,
        width:"95%",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        borderColor:'#B8B8B8',
        borderWidth:1
    },
    itemImage: {
        height: 250,
        width: "95%",
        marginTop: 10
    },
  
})

