import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'



 function Header(props) {
    const { isBackHeaderVisible, isLocationVisible,screenNameTxt,_onBackPress } = props;

    const {userData, newAry, cartCount}=props;
    return (
        <View>
            {isBackHeaderVisible &&
                <View style={styles.mainViewForScreens}>
                    <TouchableOpacity onPress={_onBackPress}>
                    <Image source={imagePath.back_arrow} style={styles.backButtonImg}/>
                    </TouchableOpacity>
                    <Text style={styles.screenNameTxt}>{screenNameTxt}</Text>
                </View>}

            {isLocationVisible &&
                <View style={styles.mainView}>
                    <Image source={imagePath.location_icon} style={styles.locationImg} />
                    <View style={styles.locationTxtView}>
                        <Text style={styles.locationTxt}>Sector 21</Text>
                        <Text style={styles.dotsTxt}>.................</Text>
                    </View>
                    <TouchableOpacity style={styles.cartTouch}>
                        <Text style={styles.cartCountTxt}>{cartCount}</Text>
                    <Image source={imagePath.cart} style={styles.cartIcon}/>
                    </TouchableOpacity>
                </View>}

        </View>
    )
}
const styles = StyleSheet.create({

    mainViewForScreens:{
        height: moderateScaleVertical(50),
        backgroundColor: colors.white,
        flexDirection: "row",
        paddingHorizontal: 15,
        justifyContent:"space-between"
    },
    backButtonImg:{
        height:30,
        width:25,
        resizeMode:"contain",
      
    },
    screenNameTxt:{
        fontFamily:fontFamily.regular,
        fontSize:20,
        marginHorizontal:20
    },
    mainView: {
        height: moderateScaleVertical(50),
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 10
    },
    locationTxtView: {
        flexDirection: "column",
        alignItems: "center"
    },
    locationTxt: {
        fontFamily: fontFamily.bold,
        fontSize: moderateScaleVertical(20),
    },
    dotsTxt: {
        fontSize: moderateScaleVertical(20),
        marginTop: -15
    },
    locationImg: {
        height: moderateScaleVertical(40),
        width: moderateScale(40),
        resizeMode: "contain"
    },
    cartIcon:{
        height:55,
        width:55,
        resizeMode:"contain",
     
    },
    cartTouch:{
        position:"absolute",
        right:15
    },
    cartCountTxt:{
        position:"absolute",
        right:20,
        fontFamily:fontFamily.medium,
        fontSize:20,
        top:10
    }
})

const mapStateToProps=state=>{
    return{
        userData:state.auth.userData,
        newAry:state.home.newAry,
        cartCount:state.home.cartCount
    }
}

export default connect(mapStateToProps)(Header)