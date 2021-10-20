import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
// import Player from "../components/Player";
import SelectWinner from "../components/SelectWinner";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectHummer } from "../config/Reducers/UserGamesReducer";

export default function GamePlayGuessingScreen({navigation}) {

    
    const currentUserGames = useSelector(state => state.userGames.currentUserGames)
    const currentHummer = useSelector(state => state.userGames.currentHummer)
    let currentGuessers = currentUserGames.filter(player => player.user_id !== currentHummer.user_id)
    
    const [newHummer, setNewHummer] = useState(currentHummer)

    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Select Winner</Text>
            {currentGuessers.map(guesser => <SelectWinner player = {guesser} setNewHummer={setNewHummer}/>)}
            <TouchableOpacity style={styles.button} onPress={() => {
                console.log("newHummer: ", newHummer)
                dispatch(selectHummer(newHummer.user_id))
                navigation.push("GamePlayPassing")
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}