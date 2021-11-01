import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import { useState } from 'react'
import { createGame, savePassStyle, saveTurnStyle } from '../config/Reducers/GamesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { createUserGames } from '../config/Reducers/UserGamesReducer'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function GameStyleSetupScreen({ navigation }) {
    
    const dispatch = useDispatch()
    const [gameName, setGameName] = useState("")
    const [passStyle, setPassStyle] = useState(undefined)
    const [turnStyle, setTurnStyle] = useState(undefined)

    const players = useSelector(state => state.players.currentPlayers)

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Gameplay Mode</Text>
            <Text style = {styles.subHeaderText}>Choose Passing Style</Text>
            <TouchableOpacity style = {passStyle === "winner" ? styles.selectedButton : styles.button} onPress={() => setPassStyle("winner")}>
                <Text style = {passStyle === "winner" ? styles.selectedButtonText : styles.buttonText} onPress={() => setPassStyle("winner")}>The Winner Takes It All</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {passStyle === "circle" ? styles.selectedButton : styles.button} onPress={() => setPassStyle("circle")}>
                <Text style = {passStyle === "circle" ? styles.selectedButtonText : styles.buttonText}>What Goes Around... Comes Around</Text>
            </TouchableOpacity>

            <Text style = {styles.subHeaderText}>Define Game Duration</Text>
            <TouchableOpacity style = {turnStyle === "countdown" ? styles.selectedButton : styles.button} onPress={() => setTurnStyle("countdown")}>
                <Text style = {turnStyle === "countdown" ? styles.selectedButtonText : styles.buttonText}>The Final Countdown</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {turnStyle === "tbd" ? styles.selectedButton : styles.button} onPress={() => setTurnStyle("tbd")}>
                <Text style = {turnStyle === "tbd" ? styles.selectedButtonText : styles.buttonText}>TBD</Text>
            </TouchableOpacity>

            <Text style = {styles.subHeaderText}>Name Your Game</Text>
            <TextInput style={styles.input} value={gameName}  onChangeText={setGameName} defaultValue={"Set Game Name"} />

            <TouchableOpacity style = {styles.button} onPress = {() => {
                dispatch(savePassStyle(passStyle))
                dispatch(saveTurnStyle(turnStyle))
                dispatch(createGame(gameName))
                .then((response) => {
                    let gameObj = response.payload
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