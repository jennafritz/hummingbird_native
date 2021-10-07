import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
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


export default function SongOption({song}) {
    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {decadeButton}>
                <Text style = {styles.buttonText}>{song}</Text>
            </TouchableOpacity>
        </View>
    )
}