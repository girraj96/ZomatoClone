import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'



 function Header(props) {
    const { isBackHeaderVisible, isLocationVisible,screenNameTxt,_onBackPress,onCartClick,
        iscartIconVisible,isLogoutVisible, _onLogout} = props;

    const { newAry}=props;
 
    return (
        <View>
            {isBackHeaderVisible &&
                <View style={styles.mainViewForScreens}>
                   <View style={styles.screenLeft}>
                   <TouchableOpacity onPress={_onBackPress}>
                    <Image source={imagePath.back_arrow} style={styles.backButtonImg}/>
                    </TouchableOpacity>
                    <Text style={styles.screenNameTxt}>{screenNameTxt}</Text>
                   </View>
                {iscartIconVisible&& <View style={styles.isCartVisibleView}>
                    <Text style={styles.cartCountTxt}>{newAry.length}</Text>
                    <Image source={imagePath.cart} style={styles.cartIcon}/>
                    </View>}
                </View>}
                {isLogoutVisible&&
                    <TouchableOpacity onPress={_onLogout} style={{position:"absolute", right:10, bottom:5}}>
                        <Image source={imagePath.logout} style={{height:40,width:40}}/>
                    </TouchableOpacity>}

            {isLocationVisible &&
                <View style={styles.mainView}>
                    <Image source={imagePath.location_icon} style={styles.locationImg} />
                    <View style={styles.locationTxtView}>
                        <Text style={styles.locationTxt}>Sector 21</Text>
                        <Text style={styles.dotsTxt}>.................</Text>
                    </View>
                    <TouchableOpacity style={styles.cartTouch} onPress={onCartClick}>
                        <Text style={styles.cartCountTxt}>{newAry.length}</Text>
                    <Image source={imagePath.cart} style={styles.cartIcon}/>
                    </TouchableOpacity>
                </View>}

        </View>
    )
}

const mapStateToProps=state=>{
    return{
        newAry:state.home.newAry,
    }
}
export default connect(mapStateToProps)(Header)

const styles = StyleSheet.create({
    screenLeft:{
        flexDirection: "row",

    },
    mainViewForScreens:{
        height: moderateScaleVertical(50),
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
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
    },
    isCartVisibleView:{
        position:"absolute",
        right:15
    }
})

