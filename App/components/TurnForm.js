import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";


export default function TurnForm() {
    return (
        <View >
            <Text style={styles.text}>Select Number Of Turns</Text>
            <TextInput style={styles.input} />
        </View>
    )
}