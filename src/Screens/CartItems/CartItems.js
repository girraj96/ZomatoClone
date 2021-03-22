import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import CartAddedItems from '../../Components/CartAddedItems';
import CartListFooter from '../../Components/CartListFooter';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import actions from "../../redux/actions";
import EmptyCart from '../../Components/EmptyCart';


class CartItems extends Component {

    _onBackPress = () => this.props.navigation.goBack();
    
    _onAddButton=(id)=>{
        actions.addItemCount(id)
    }
    _onSubButton=(id)=>{
        actions.subItemCount(id)
    }
    _onDelete=(id)=>{
        actions.deleteItem(id);
    }
 
    componentDidMount(){
        actions.itemsTotalPrice(this.props.newAry);
    }

    render() {
        const {newAry,total_price} = this.props;
        return (
            <WrapperContainer bgColor={colors.white} statusBarColor={colors.white} barStyle={"dark-content"}>
                <Header isBackHeaderVisible={true} screenNameTxt={"Cart List"} iscartIconVisible={true} _onBackPress={this._onBackPress} />
                <View style={{flex:1}}>
                    <FlatList
                        data={newAry}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={<EmptyCart/>}
                        ListFooterComponent={<CartListFooter total_price={total_price}/>}
                        renderItem={({ item }) => <CartAddedItems data={item}  _onAddButton={this._onAddButton}
                        _onSubButton={this._onSubButton}  _onDelete={this._onDelete} />
                        
                        } />
                </View>
            </WrapperContainer>

        )
    }
}
const mapStateToProps = state => {
    return {
        newAry: state.home.newAry,
        total_price:state.home.total_price
    }
}
export default connect(mapStateToProps)(CartItems)

