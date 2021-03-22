import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import actions from "../../redux/actions"

export default class MyAccount extends Component {

    _onLogout=()=>{
        actions.onLogout();
      }

    render() {
        return (
              <WrapperContainer>
                  <Header isBackHeaderVisible={true} screenNameTxt="My Account" isLogoutVisible={true} _onLogout={this._onLogout}/>
              </WrapperContainer>
        )
    }
}
