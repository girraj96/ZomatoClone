import React, { Component } from 'react'
import { Text, TouchableOpacity, View,Image } from 'react-native'
import RoundButton from '../../Components/RoundButton';
import navigationStrings from '../../constants/navigationStrings';
import styles from "./style";

export default class SplashScreen extends Component {

    render() {
        const {navigation}=this.props;

        return (
            <View style={styles.mainView}>
                <Text style={styles.zomatoTxt}>zomato</Text>
                <View style={styles.roundBtnView}>
                    <RoundButton _onRoundBtnClick={()=>navigation.navigate(navigationStrings.OTP_VERIFICATION)}/>
                </View>
            </View>
        )
    }
}
