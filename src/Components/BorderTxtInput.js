import React from 'react'
import { View, Text, TextInput,StyleSheet} from 'react-native'
import colors from '../styles/colors'
import { moderateScaleVertical } from '../styles/responsiveSize';

export default function BorderTxtInput(props) {
    const {placeholder,inputType, maxLength, _onChangeTxt}=props;
    return (
        <TextInput onChangeText={_onChangeTxt}
         style={styles.txtInput} placeholder={placeholder} keyboardType={inputType} maxLength={maxLength}/>
    )
}
const styles = StyleSheet.create({
    txtInput:{
        height:moderateScaleVertical(50),
       backgroundColor:colors.white,
       borderRadius:5,
    }
})
