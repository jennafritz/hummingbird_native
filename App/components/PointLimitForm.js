import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";

const screen = Dimensions.get("window")

const numberOfTurnsInput = {
    ...styles.input,
    width: screen.width * 0.6,
}

const enterButton = {
    ...styles.button,
    width: screen.width * 0.6,
    backgroundColor: colors.lightPurple
}

export default function PointLimitForm({setMaxPoints, setTurnStyle, setShowTurnOptions}) {

    const [formData, setFormData] = useState("")

    return (
        <>
            {/* <Text style={styles.pageSubHeaderText}>Enter Number Of Turns</Text> */}
            <TextInput keyboardType = "numeric" value = {formData} onChangeText = {setFormData} style={numberOfTurnsInput} placeholder="Enter Point Threshold"/>
            <TouchableOpacity style={enterButton} onPress={() => {
                if(formData % 10 === 0){
                    setMaxPoints(formData)
                    setTurnStyle("pointLimit")
                    setShowTurnOptions(false)
                } else {
                    Alert.alert("Invalid Limit", "Point threshold must be divisible by 10.")
                }
                }}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </>
    )
}