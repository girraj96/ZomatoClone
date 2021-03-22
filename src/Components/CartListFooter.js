import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import { connect } from 'react-redux'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

 function CartListFooter(props) {
     const {total_price, newAry}=props; 
    if(newAry.length===0){
        return(<></>)
    }
    else{
        return(
            <View>
            <View style={styles.offersView}>
             <Text style={styles.offerTxt}>Offers</Text>
             <View style={styles.offersSubView}>
                 <View style={styles.promoView}>
                     <Image source={imagePath.promo_img} style={styles.promoImg} />
                     <Text style={styles.promoTxt}>Select a promo code</Text>
                 </View>
                 <Text style={styles.viewOfferTxt}>View Offers</Text>
             </View>
            </View>
            <View style={styles.priceCountView}>
            <View style={styles.totalPriceView}>
                 <Text style={styles.grandTotal}>
                     Grand Total
                     </Text>
                     <Text style={styles.grandTotal}>
                         ₹ {total_price}
                     </Text>
    
                 </View>
              
                 <View style={styles.taxView}>
                 <Text style={styles.taxtTxt}>
                         Taxes &#x26; Charges
                     </Text>
                     <Text style={styles.taxtTxt}>
                         ₹ _ _._ _
                     </Text>
    
                 </View>
                 <View style={styles.itemTotalView}>
                     <Text style={styles.itemTotalTxt}>
                         Item Total
                     </Text>
                     <Text style={styles.itemTotalTxt}>
                         ₹ _ _._ _
                     </Text>
                 </View>
          
            </View>
         </View>
        )
    }
     
    

}


const mapStateToProps=state=>{
    return{
        newAry: state.home.newAry,
}
}

export default connect(mapStateToProps)(CartListFooter);

const styles = StyleSheet.create({
    offersView:{
        height:100,
        backgroundColor:colors.light_blue1,
        paddingHorizontal:15,
        paddingVertical:10
    },
    offerTxt:{
        fontFamily:fontFamily.medium,
        fontSize:18
    },
    promoImg:{
        height:35,
        width:35
    },
    promoTxt:{
        fontFamily:fontFamily.medium,
        fontSize:16,
    },
    offersSubView:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20,
        justifyContent:"space-between"
    },
    promoView:{
        flexDirection:"row",
        alignItems:"center"
    },
    viewOfferTxt:{
        color:"red"
    },
    priceCountView:{
        height:110,
        paddingHorizontal:15,
        paddingVertical:10
    },
    itemTotalView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5

    },
    taxView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5
    },
    totalPriceView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:5
    },
    grandTotal:{
        fontFamily:fontFamily.bold,
        fontSize:18
    },
    itemTotalTxt:{
        fontFamily:fontFamily.bold,
        fontSize:18
    },
    taxtTxt:{
        fontFamily:fontFamily.regular,
        fontSize:16
    }
})

