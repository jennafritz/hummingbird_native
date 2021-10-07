import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import DecadeButton from '../components/DecadeButton'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function DecadeSetupScreen({ navigation }) {
    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Decades</Text>
            <DecadeButton decade = {"50's"}/>
            <DecadeButton decade = {"60's"}/>
            <DecadeButton decade = {"70's"}/>
            <DecadeButton decade = {"80's"}/>
            <DecadeButton decade = {"90's"}/>
            <DecadeButton decade = {"00's"}/>
            <DecadeButton decade = {"10's"}/>
            <DecadeButton decade = {"20's"}/>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.push("GamePlayHumming")}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}