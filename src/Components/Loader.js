import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
export default function Loader(props) {

    const {isLoading}=props;

  if(isLoading){
      return(
        <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.theme_color} />
      </View>
      )
  }
  else{
      return(
          <></>
      )
      }
}

const styles = StyleSheet.create({
  container: {
    top:0,
    bottom:0,
    left:0,
    right:0,
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.transparent3,
  },

});

