import React from "react";
// import {  } from "react-native-gesture-handler";
import { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "../constants/styles";
import { selectDecade } from "../config/Reducers/DecadesReducer";
import { useDispatch, useSelector } from "react-redux";
import colors from "../constants/colors";

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",

}

const selectedDecadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",
    backgroundColor: colors.darkBlue
}

const buttonContainer = {
    ...styles.container,
    width: "100%"
}

const selectedButtonText = {
    ...styles.buttonText,
    color: colors.color
}

export default function DecadeButton({decade}) {

    const selectedDecades = useSelector(state => state.decades.selectedDecades)
    const [selected, setSelected] = useState(!!selectedDecades.includes(decade.value))

    const dispatch = useDispatch()

    return (
        <View style={buttonContainer}>
            <TouchableOpacity style={selected ?
            selectedDecadeButton : decadeButton} onPress={() => {
                dispatch(selectDecade(decade.value))
                setSelected(!selected)
                }}>
                <Text style={selected ? selectedButtonText : styles.buttonText}>{decade.name}</Text>
            </TouchableOpacity>
        </View>
    )
}