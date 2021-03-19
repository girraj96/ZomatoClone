import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

export default StyleSheet.create({
    mainView:{
        flex:1,
    },
    otpBackgroundImg:{
       flex:1,
    },
    allViews:{
        position:"absolute",
        top:"50%",
        alignSelf:"center",
        alignItems:"center",
        width:"90%"
    },
    txtInputView:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:colors.white,
        borderRadius:5,
        elevation:10,
    },
    indiaFlagIcon:{
        height:"100%",
        width:moderateScale(30),
        resizeMode:"contain",
        marginLeft:moderateScale(10)
    },
    countryCodeTxt:{
        alignSelf:"center",
        fontFamily:fontFamily.medium,
        marginHorizontal:5,
        fontSize:textScale(12)
    },
    simpleButtonView:{
        width:"100%",
        alignSelf:"center",
        marginVertical:20
    },
    orView:{
    flexDirection:"row",        
    },
    orTxt:{
        marginHorizontal:10,
        color:colors.white
    },
    lineView:{
        backgroundColor:colors.light_grey,
        width:"40%",
        height:0.5,
        alignSelf:"center"  
    },
    emailButtonView:{
        width:"100%",
        marginTop:20 
    },
    facebookGoogleBtnView:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:20
    },
    facebookInnerView:{
        width:"48%",       
    },
 
  
})