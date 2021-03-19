import React, { Component } from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import { SplashScreen } from './src/Screens';


export default class App extends Component {

  render() {
    return (
      <>
        <Routes />
        <FlashMessage position="top" />
      </>
    )
  }
}
