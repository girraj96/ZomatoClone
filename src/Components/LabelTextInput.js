import React from 'react'
import { TextInput,Text,StyleSheet,View } from 'react-native';
import fontFamily from '../styles/fontFamily';
import colors from "../styles/colors"

export default function LabelTextInput(props) {
    const {labelTxtInput,placeholder,inputKey,
        maxLength,keyboardType,isSecureTextEntry,_onChangeText}=props;
    return (
        <View>
            <Text style={styles.labelTxt}>{labelTxtInput}</Text>
            <TextInput onChangeText={_onChangeText(inputKey)}
            style={styles.txtInput} placeholder={placeholder} maxLength={maxLength} 
            keyboardType={keyboardType} secureTextEntry={isSecureTextEntry}/>

        </View>
    )
}
const styles = StyleSheet.create({
    labelTxt:{
        fontFamily:fontFamily.medium,
        fontSize:20
    },
    txtInput:{
        height:50,
        borderBottomColor:colors.theme_color,
        borderBottomWidth:1,
    }
})
