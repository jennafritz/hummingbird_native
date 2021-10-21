import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from "react-redux";
import { addPoints } from "../config/Reducers/UserGamesReducer";
import styles from "../constants/styles";

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",
}

const buttonContainer = {
    ...styles.container,
    // width: "80%"
    width: 300
}


export default function SelectWinner({player, setNewHummer}) {
    
    const dispatch = useDispatch()

    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {decadeButton} onPress={() => {
                setNewHummer(player)
                dispatch(addPoints(player.user_id))
            }}>
                <Text style = {styles.buttonText}>{player.user.username} - {player.points}</Text>
            </TouchableOpacity>
        </View>
    )
}