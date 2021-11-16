import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";

const screen = Dimensions.get("window")

const numberOfTurnsInput = {
    ...styles.input,
    width: screen.width * 0.6,
    borderWidth: 2
}

const enterButton = {
    ...styles.button,
    width: screen.width * 0.6,
}

export default function TurnForm({setTurnInput, setTurnStyle, setShowTurnOptions}) {

    const [formData, setFormData] = useState("")

    return (
        <>
            {/* <Text style={styles.pageSubHeaderText}>Enter Number Of Turns</Text> */}
            <TextInput keyboardType = "numeric" value = {formData} onChangeText = {setFormData} style={numberOfTurnsInput} placeholder="Enter Number of Turns"/>
            <TouchableOpacity style={enterButton} onPress={() => {
                setTurnInput(formData)
                setTurnStyle("countdown")
                setShowTurnOptions(false)
                }}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </>
    )
}