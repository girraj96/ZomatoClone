import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';


 class CartItems extends Component {
    

    renderItems=(item)=>{
        console.log(item)
        return(
            <>  
        </>
        )
    }


    render() {
        const {userData, newAry, cartCount}=this.props;
        console.log(newAry)
        return (
            <>
            <FlatList 
            data={newAry}
            renderItem={({item})=><Text>{item.foodType}</Text>}/>
            </>
        )
    }
}
const mapStateToProps=state=>{
    return{
        userData:state.auth.userData,
        newAry:state.home.newAry,
        cartCount:state.home.cartCount
    }
}
export default connect (mapStateToProps)(CartItems)

const styles = StyleSheet.create({
    
})

