import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";



export default function TurnForm({setTurnInput}) {

    const [formData, setFormData] = useState("")

    return (
        <View >
            <Text style={styles.text}>Select Number Of Turns</Text>
            <TextInput keyboardType = "numeric" value = {formData} onChangeText = {setFormData} style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={() => setTurnInput(formData)}>
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    )
}