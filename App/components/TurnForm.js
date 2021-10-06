import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, StyleSheet, TextInput, Text } from 'react-native'
import colors from "../constants/colors";
// import styles from "../constants/styles";

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
        margin: 5
    },
    text: {
        color: colors.color
    }
})

export default function TurnForm() {
    return (
        <View >
            <Text style={styles.text}>Select Number Of Turns</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}