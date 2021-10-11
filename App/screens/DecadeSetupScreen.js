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
            <DecadeButton decade = {{name: "50's", value: 1950}}/>
            <DecadeButton decade = {{name: "60's", value: 1960}}/>
            <DecadeButton decade = {{name: "70's", value: 1970}}/>
            <DecadeButton decade = {{name: "80's", value: 1980}}/>
            <DecadeButton decade = {{name: "90's", value: 1990}}/>
            <DecadeButton decade = {{name: "00's", value: 2000}}/>
            <DecadeButton decade = {{name: "10's", value: 2010}}/>
            <DecadeButton decade = {{name: "20's", value: 2020}}/>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.push("GameStyleSetup")}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}