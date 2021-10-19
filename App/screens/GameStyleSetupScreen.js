import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import { useState } from 'react'
import { createGame } from '../config/Reducers/GamesReducer'
import { useDispatch } from 'react-redux'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}





export default function GameStyleSetupScreen({ navigation }) {
    
    const dispatch = useDispatch()
    const [gameName, setGameName] = useState("")

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Gameplay Mode</Text>
            <Text style = {styles.buttonText}>The Winner Takes It All</Text>
            <TextInput style={styles.input} value={gameName}  onChangeText={() => setGameName()} defaultValue={"Set Game Name"} />
            <TouchableOpacity style = {styles.button} onPress = {() => {navigation.push("GamePlayPassing")
        dispatch(createGame(gameName))}}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}