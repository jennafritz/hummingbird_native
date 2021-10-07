import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "../constants/styles";

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",
}

const buttonContainer = {
    ...styles.container,
    width: "80%"
}





export default function DecadeButton({decade}) {
    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {decadeButton}>
                <Text style = {styles.buttonText}>{decade}</Text>
            </TouchableOpacity>
        </View>
    )
}