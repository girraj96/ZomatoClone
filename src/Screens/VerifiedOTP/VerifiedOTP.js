import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BorderTxtInput from '../../Components/BorderTxtInput'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import styles from './style'


export default class VerifiedOTP extends Component {
    _onBackPress=()=>{
        const {navigation}=this.props;
        navigation.goBack();
    }
    render() {
        const {mobileNumber}=this.props.route.params
        return (
            <WrapperContainer statusBarColor={colors.light_grey} bgColor={colors.white} barStyle={"dark-content"}>
                <Header isBackHeaderVisible={true} screenNameTxt={"Enter Verification Code"} _onBackPress={this._onBackPress}/>
                <View style={styles.mobileNumberTxtView}>
                    <Text style={styles.sentMsgTxt}>We have sent a verification code to</Text>
                    <Text style={styles.mobileNumberTxt}>{mobileNumber}</Text>
                </View>
                <View style={styles.otpNumberMainView}>
                    <View style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                    <View  style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                    <View  style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                    <View  style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                    <View  style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                    <View  style={styles.otpNumberSubView}><BorderTxtInput maxLength={1} inputType={"numeric"}/></View>
                </View>
                <View style={styles.resendOtpView }>
                <Text>Didn't receive the code ?</Text>
                    <Text>Resend now</Text>
                </View>
            </WrapperContainer>
        )
    }
}
