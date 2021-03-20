import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import CartAddedItems from '../../Components/CartAddedItems';
import CartListFooter from '../../Components/CartListFooter';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';


class CartItems extends Component {


    // renderItems=(item)=>{
    //     console.log(item)
    //     return(
    //         <>  
    //     </>
    //     )
    // }

    _onBackPress = () => this.props.navigation.goBack();

    render() {
        const { userData, newAry, cartCount } = this.props;
        console.log(newAry)
        return (
            <WrapperContainer bgColor={colors.white} statusBarColor={colors.white} barStyle={"dark-content"}>
                <Header isBackHeaderVisible={true} screenNameTxt={"Cart List"} iscartIconVisible={true} _onBackPress={this._onBackPress} />
                <View style={{flex:1}}>
                    <FlatList
                        data={newAry}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        keyExtractor={(item) => item.id.toString()}
                        ListFooterComponent={({item})=><CartListFooter/>}
                        renderItem={({ item }) => <CartAddedItems data={item}
                        />
                        
                        } />
                </View>
            </WrapperContainer>


        )
    }
}
const mapStateToProps = state => {
    return {
        userData: state.auth.userData,
        newAry: state.home.newAry,
        cartCount: state.home.cartCount
    }
}
export default connect(mapStateToProps)(CartItems)

const styles = StyleSheet.create({

})

