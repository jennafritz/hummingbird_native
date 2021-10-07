import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, StyleSheet, TextInput, Text } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";

export default function LoginForm() {
    return (
        <View >
            <Text style={styles.text}>Login For</Text>
            <TextInput style={styles.input} defaultValue={"Username"} />
            <TextInput style={styles.input} defaultValue={"Password"} />
        </View>
    )
}