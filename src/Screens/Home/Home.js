import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import Header from '../../Components/Header'
import SearchBox from '../../Components/SearchBox';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import styles from './style';

class Home extends Component {
    render() {
        return (
          <WrapperContainer bgColor={colors.white} statusBarColor={colors.white} barStyle={"dark-content"}>
              <Header isLocationVisible={true}/>
            <View style={styles.searchBoxView}>
            <SearchBox/>
            </View>
          </WrapperContainer>
        )
    }
}

export default Home;