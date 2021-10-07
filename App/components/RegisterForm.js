import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";

export default function RegisterForm() {
    return (
        <View >
            <Text style={styles.text}>Register New Player</Text>
            <TextInput style={styles.input} defaultValue={"Username"} />
            <TextInput style={styles.input} defaultValue={"Password"} />
        </View>
    )
}