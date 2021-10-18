import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
import colors from '../constants/colors'
import TurnForm from '../components/TurnForm'
import RegisterForm from '../components/RegisterForm'
import styles from '../constants/styles'
import Player from '../components/Player'
import { useSelector } from 'react-redux'

export default function PlayerSetupScreen({ navigation }) {

const currentPlayers = useSelector(state => state.players.currentPlayers)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Player Setup Screen</Text>
            {currentPlayers.map(playerObj => <Player player = {playerObj}/>)}
            <LoginForm />
            {/* <RegisterForm /> */}
            <TurnForm />
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("DecadeSetup")}>
                <Text style={styles.buttonText}>Choose Decades</Text>
            </TouchableOpacity>
        </View>
    )
}