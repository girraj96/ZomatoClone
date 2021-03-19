import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'

export default function Header(props) {
    const { isBackHeaderVisible, isLocationVisible,screenNameTxt,_onBackPress } = props;
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
    }
})
