import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import colors from '../styles/colors';

export default function TagsFlatlist(props) {
    const {data}=props;
    return (
        <TouchableOpacity style={styles.tagsTouch}>
            <Text>{data.tagTxt}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    tagsTouch:{
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.theme_color,
        borderRadius:5,
        marginHorizontal:3
    }
})
