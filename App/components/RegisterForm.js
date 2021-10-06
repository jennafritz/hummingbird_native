import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, StyleSheet, TextInput, Text } from 'react-native'
import colors from "../constants/colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.color,
        margin: 5,
        color: colors.color
    },
    text: {
        color: colors.color
    }
})

export default function RegisterForm() {
    return (
        <View >
            <Text style={styles.text}>Register New Player</Text>
            <TextInput style={styles.input} defaultValue={"Username"} />
            <TextInput style={styles.input} defaultValue={"Password"} />
        </View>
    )
}