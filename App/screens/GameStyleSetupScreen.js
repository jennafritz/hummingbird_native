import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../constants/styles'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function GameStyleSetupScreen({ navigation }) {
    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Gameplay Mode</Text>
            <Text style = {styles.buttonText}>The Winner Takes It All</Text>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.push("GamePlayPassing")}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}