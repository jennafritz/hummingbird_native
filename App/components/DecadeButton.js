import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "../constants/styles";
import { selectDecade } from "../config/Reducers/DecadesReducer";
import { useDispatch } from "react-redux";

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

    const dispatch = useDispatch()

    return (
        <View style = {buttonContainer}>
            <TouchableOpacity onPress style = {decadeButton} onPress = {() => dispatch(selectDecade(decade.value))}>
                <Text style = {styles.buttonText}>{decade.name}</Text>
            </TouchableOpacity>
        </View>
    )
}