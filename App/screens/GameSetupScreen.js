import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    text: {
        color: colors.color
    },
    buttonText: {
        fontSize: 25,
        color: colors.color,
        padding: 5
    },
    button: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 25
    }
})

export default function GameSetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Game Setup Screen</Text>
        </View>
    )
}