import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function CartListFooter() {
    return (
        <View>
           <View style={styles.offersView}>
                
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    offersView:{
        height:80,
        backgroundColor:colors.light_blue1
    }
})

