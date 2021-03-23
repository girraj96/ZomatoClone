import React, { Component } from 'react'
import { Text, View, ImageBackground, StatusBar, SafeAreaView, Image } from 'react-native'
import BorderTxtInput from '../../Components/BorderTxtInput'
import SimpleButton from '../../Components/SimpleButton'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../constants/navigationStrings'
import colors from '../../styles/colors'
import styles from './style'
import actions from "../../redux/actions"
import Loader from '../../Components/Loader'
import { showMessage } from 'react-native-flash-message'

export default class OtpVerification extends Component {

    state={
        userMobileNumber:"",
        isLoading:false
    }

    _onChangeTxt=(value)=>{
        this.setState({
            userMobileNumber:value
        })
    }
    _onSendOtp = () => {

        const {userMobileNumber} = this.state;
        const {navigation} = this.props;

        this.setState({
          isLoading: true,
        });
          actions.onSendOTP({
              contactDetails:{
                phoneNo:userMobileNumber,
                countryCode:'+91',
                countryCodeISO:"IN"
              }
           
            })
            .then(res => {
              this.setState({
                isLoading: false,
              });
              showMessage({
                type: 'success',
                icon: 'success',
                message: 'OTP sent successfully',
              });
            navigation.navigate(navigationStrings.VERIFIED_OTP,{userId:res.data.userId})
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
      };

    render() {
        const {isLoading}=this.state;
        return (
            <SafeAreaView style={styles.mainView}>
                <StatusBar backgroundColor={colors.statusbar_color} />
                <ImageBackground source={imagePath.otp_background} style={styles.otpBackgroundImg}>
                    <View style={styles.allViews}>
                        <View style={styles.txtInputView}>
                            <Image source={imagePath.india_flag} style={styles.indiaFlagIcon} />
                            <Text style={styles.countryCodeTxt}>+91&#9660;</Text>
                            <BorderTxtInput placeholder={"Phone Number"} inputType={"numeric"} maxLength={10} _onChangeTxt={this._onChangeTxt}/>
                        </View>

                        <View style={styles.simpleButtonView}>
                            <SimpleButton buttonName={"Send OTP"} buttonColor={colors.light_black} 
                            textColor={colors.white} _onSimpleBtn={this._onSendOtp}/>
                        </View>

                        <View style={styles.orView}>
                            <View style={styles.lineView}/>
                            <Text style={styles.orTxt}>Or</Text>
                            <View style={styles.lineView}/>

                        </View>

                        <View style={styles.emailButtonView}>
                           <SimpleButton buttonName={"Continue with Email"} buttonColor={colors.white} 
                            textColor={colors.light_black} isIconVisible={true} iconSource={imagePath.mail_icon} />
                        </View>
                        <View style={styles.facebookGoogleBtnView}>
                            <View style={styles.facebookInnerView}>
                                <SimpleButton buttonName={"Facebook"} buttonColor={colors.white} 
                                textColor={colors.light_black} isIconVisible={true} 
                                iconSource={imagePath.facebook_icon} />
                            </View>
                            <View style={styles.facebookInnerView}>
                                <SimpleButton buttonName={"Google"} buttonColor={colors.white} 
                                textColor={colors.light_black} isIconVisible={true} 
                                iconSource={imagePath.google_icon} />
                            </View>      
                        </View>
                    </View>
                </ImageBackground>
                <Loader isLoading={isLoading} />

            </SafeAreaView>
        )
    }
}

