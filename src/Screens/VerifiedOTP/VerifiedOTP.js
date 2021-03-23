import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Platform} from 'react-native'
import { CodeField } from 'react-native-confirmation-code-field'
import BorderTxtInput from '../../Components/BorderTxtInput'
import Header from '../../Components/Header'
import RoundButton from '../../Components/RoundButton'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../constants/navigationStrings'
import colors from '../../styles/colors'
import styles from './style';
import OTPTextView from "react-native-otp-textinput"
import actions from "../../redux/actions"
import Loader from '../../Components/Loader'
import { showMessage } from 'react-native-flash-message'




export default class VerifiedOTP extends Component {

    state ={
        otpInput: '',
        inputText: '',
        isLoading:false,
        newOtp:12345
    }

    _onBackPress = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }
    _onRoundBtnClick = () => {

        const { navigation } = this.props;
        const {otpInput}=this.state;
        const {userId}=this.props.route.params
        this.setState({
            isLoading: true,
          })
        actions.otpVerify({
            userId,
            otp:otpInput,
            deviceToken:"123",
            registerFrom:Platform.OS.toUpperCase()            
           })
           .then(res => {
             this.setState({
               isLoading: false,
             });
             showMessage({
               type: 'success',
               icon: 'success',
               message: 'otp verified successfully',
             });
             navigation.navigate(navigationStrings.LOGIN);
           })
           .catch(error => {
             this.setState({
               isLoading: false,
             });
             showMessage({
               type: 'danger',
               icon: 'danger',
               message: error.message,
             });
           });
    }
    render() {
        const { mobileNumber } = this.props.route.params;
        const {isLoading} =this.state;
        return (
            <WrapperContainer statusBarColor={colors.light_grey} bgColor={colors.white} barStyle={"dark-content"}>
                <Header isBackHeaderVisible={true} screenNameTxt={"Enter Verification Code"} _onBackPress={this._onBackPress} />
                <View style={styles.mobileNumberTxtView}>
                    <Text style={styles.sentMsgTxt}>We have sent a verification code to</Text>
                    <Text style={styles.mobileNumberTxt}>{mobileNumber}</Text>
                </View>
                <View style={styles.otpNumberMainView}>
                <OTPTextView
                ref={e => (this.input1 = e)}
                containerStyle={styles.textInputContainer}
                handleTextChange={text => this.setState({otpInput: text})}
                inputCount={5}
                keyboardType="numeric"
              />
                </View>
                <View style={styles.resendOtpView}>
                    <Text>Didn't receive the code ?</Text>

                    <TouchableOpacity>
                        <Text style={styles.resendTxt}>Resend now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.roundBtnView}>
                    <RoundButton _onRoundBtnClick={this._onRoundBtnClick} />
                </View>

                <Loader isLoading={isLoading} />
            </WrapperContainer>
        )
    }
}
