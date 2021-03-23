import {StyleSheet} from "react-native"
import colors from "../../styles/colors"
import fontFamily from "../../styles/fontFamily"
export default StyleSheet.create({
    mobileNumberTxtView:{
        alignSelf:"center",
        marginVertical:30
    },
    sentMsgTxt:{
        textAlign:"center",
        fontFamily:fontFamily.regular,
        fontSize:16
    },
    mobileNumberTxt:{
        textAlign:"center",
        fontFamily:fontFamily.bold,
        fontSize:16,
        marginVertical:5
    },
    otpNumberMainView:{
        flexDirection:"row",
        marginVertical:40,
       alignSelf:"center",
       
    },
    otpNumberSubView:{
        height:55,
        width:55,
        borderRadius:10,
        borderWidth:1,
       alignItems:"center",
       justifyContent:"center",
        borderColor:colors.light_black,
        marginHorizontal:5
    },
    resendOtpView:{
        flexDirection:"row",
        alignSelf:"center",
        position:"absolute",
        bottom:"20%"
    },
    resendTxt:{
        color:colors.light_blue,
        marginHorizontal:5,
        fontSize:16
    },
    roundBtnView:{
        position:"absolute",
        bottom:20,
        right:20,
        
    },


    

    textInputContainer: {
        marginBottom: 20,
      },
})