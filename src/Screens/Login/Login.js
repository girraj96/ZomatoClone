import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Text, View, Image} from 'react-native'
import Header from '../../Components/Header'
import LabelTextInput from '../../Components/LabelTextInput';
import SearchBox from '../../Components/SearchBox';
import SimpleButton from '../../Components/SimpleButton';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from './style';
import apis from "../../redux/actions"
import { showMessage } from 'react-native-flash-message';
import validator from "../../utils/validations"
import navigationStrings from '../../constants/navigationStrings';
import Loader from "../../Components/Loader"

class Login extends Component {
  state={
    userEmail:"",
    userPassword:"",
    isLoading:false,
  }

  _onBackPress=()=>{
    const {navigation}=this.props;
    navigation.goBack();
  }

  isValid = () => {
    const { userEmail, userPassword} = this.state;
    const error = validator({email: userEmail, password: userPassword})
    if (error) {

        showMessage({
            type: "danger",
            icon: "danger",
            message: error
        })

        return false;
    }
    return true;
};

  _onLogin=()=>{
    const { navigation } = this.props;
    const { userEmail, userPassword} = this.state;

        if (this.isValid()) {
            this.setState({
                isLoading: true
            })

            apis.login({email: userEmail, password: userPassword})
                .then(response => {
                  navigation.navigate(navigationStrings.HOME);
                    showMessage({
                        type: "success",
                        icon: "success",
                        message:"Logged in successfully"
                    })
                }).catch((error) => {
                    this.setState({ isLoading: false });
                    showMessage({
                        type: "danger",
                        icon: "danger",
                        message: error.message
                    })
                });
        }
  }
  _onChangeText=key=> {
    return (value) => {
        this.setState({
            [key]: value,
        });
    };
}
    render() {
      const {isLoading}=this.state;
        return (
          <WrapperContainer bgColor={colors.white} statusBarColor={colors.white} barStyle={"dark-content"}>
            <Header isBackHeaderVisible={true} screenNameTxt={"Log In"} _onBackPress={this._onBackPress}/>
            <Image source={imagePath.bike_logo_zomato} style={styles.zomatoBikeLogo}/>
            <View style={styles.txtInputsView}>
            <LabelTextInput placeholder={"E-mail"}  isSecureTextEntry={false} _onChangeText={this._onChangeText} 
            inputKey="userEmail"/>
            <LabelTextInput placeholder={"Password"}  isSecureTextEntry={true} _onChangeText={this._onChangeText} 
             inputKey="userPassword"/>
            </View>
            <View style={styles.logInBtn}>
            <SimpleButton buttonName="Log in" buttonColor={colors.theme_color} textColor={colors.white}
            _onSimpleBtn={this._onLogin}/>
            </View>
            <Loader isLoading={isLoading} />
          </WrapperContainer>
        )
    }
}

export default Login;