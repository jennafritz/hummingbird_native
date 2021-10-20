import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import { useState } from 'react'
import { createGame } from '../config/Reducers/GamesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { createUserGames } from '../config/Reducers/UserGamesReducer'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function GameStyleSetupScreen({ navigation }) {
    
    const dispatch = useDispatch()
    const [gameName, setGameName] = useState("")

    const players = useSelector(state => state.players.currentPlayers)

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Gameplay Mode</Text>
            <Text style = {styles.buttonText}>The Winner Takes It All</Text>
            <TextInput style={styles.input} value={gameName}  onChangeText={setGameName} defaultValue={"Set Game Name"} />
            <TouchableOpacity style = {styles.button} onPress = {() => {
                dispatch(createGame(gameName))
                .then((response) => {
                    let gameObj = response.payload
                    console.log("gameObj: ", gameObj)
                    dispatch(createUserGames({gameId: gameObj.id, playersArray: players}))
                    .then(() => navigation.push("GamePlayPassing"))
                })
                
            }}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}