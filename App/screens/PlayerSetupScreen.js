import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
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
    }
})

export default function PlayerSetupScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Player Setup Screen</Text>
            <LoginForm />
        </View>
    )
}