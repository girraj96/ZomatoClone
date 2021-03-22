import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

export default function CartAddedItems(props) {
    const { data, _onSubButton, _onAddButton,_onDelete, } = props;
    return (
        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
            <View style={styles.productView}>
                <Image source={data.itemImg} style={styles.productImage} resizeMode="cover" />
                <View style={styles.priceDetails}>
                   <View>
                   <Text style={styles.foodType}>{data.foodType}</Text>
                    <Text style={styles.foodType}>₹{data.itemPrice}</Text>
                    <Text style={styles.customTxt}>Crust: New Hand Tossed</Text>
                    <Text style={styles.customTxt}>Size: Regular</Text>
                   </View>

                    <View style={styles.itemAddmain}>
                        <View style={styles.itemAddSub}>
                            <TouchableOpacity style={styles.subCount} onPress={() => _onSubButton(data.id)}>
                                <Text>
                                   -
                            </Text>
                            </TouchableOpacity>
                            <Text style={styles.totalCount}>
                                {data.itemCount}
                            </Text>
                            <TouchableOpacity style={styles.addCount} onPress={() => _onAddButton(data.id)}>
                                <Text>
                                    +
                                  </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={()=>_onDelete(data.id)}>
                            <Image source={imagePath.delete} style={styles.deleteIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    productView: {
        flexDirection: 'row',
    },

    productDetails: {
        flexDirection: "column",
        marginHorizontal: 5
    },
    priceDetails: {
        paddingHorizontal: 15,
        flexDirection:"row",
    },
    foodType:{
        fontFamily:fontFamily.bold,
        fontSize:17,
        marginHorizontal:2
    },
    customTxt:{
        fontFamily:fontFamily.regular,
        fontSize:14
    },

    productImage: {
        height: 80,
        width: 100,
    },
    itemAddmain: {
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal:5,
        alignSelf:"flex-start"
    },
    itemAddSub: {
        height:30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.theme_color,
        flexDirection: "row",
        alignItems: "center",
    },
    subCount: {
        borderRightWidth: 1,
        paddingHorizontal:15
    },
    totalCount: {
        paddingHorizontal:15

    },
    addCount: {
        borderLeftWidth: 1,
        paddingHorizontal:15

    },
    deleteIcon: {
        height: 20,
        width: 20,
        resizeMode:"contain",
        marginVertical:10
    }
})
