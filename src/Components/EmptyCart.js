import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

export default function EmptyCart() {
    return (
        <View style={styles.emptyCartView}>
            <Image source={imagePath.empty_cart} style={styles.emptyCart} />
            <Text style={styles.cartMessage}>Opps! your cart is empty</Text>
            <Text style={styles.cartEmptyMsg}>Looks like you haven't added anything to your cart</Text></View>
    )
}

const styles = StyleSheet.create({

    emptyCartView: {
        alignItems: "center",
        justifyContent: "center"
    },
    emptyCart: {
        height: 400,
        width: 400,
        resizeMode: "contain"
    },
    cartMessage: {
        fontSize: 24,
        color: colors.theme_color
    },
    cartEmptyMsg: {
        fontSize: 18,
        width: "80%",
        textAlign: "center",
        marginVertical: 15,
        color: "grey",
        fontFamily:fontFamily.regular
    }
})
