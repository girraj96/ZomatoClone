import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";


export default StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:colors.theme_color,
        alignItems:"center",
        justifyContent:"center"
    },
    zomatoTxt:{
        fontFamily:fontFamily.bold,
        color:colors.white,
        fontSize:40
    },
    roundBtnView:{
        position:"absolute",
        right:20,
        bottom:20
    }

})