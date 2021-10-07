import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
import colors from '../constants/colors'
import TurnForm from '../components/TurnForm'
import RegisterForm from '../components/RegisterForm'
import styles from '../constants/styles'

export default function PlayerSetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Player Setup Screen</Text>
            <LoginForm />
            <RegisterForm />
            <TurnForm />
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("DecadeSetup")}>
                <Text style={styles.buttonText}>Choose Decades</Text>
            </TouchableOpacity>
        </View>
    )
}