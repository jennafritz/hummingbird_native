import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from "../constants/styles";

const guesser = {
    ...styles.button,
    margin: 0,
    width: "100%",
}

const selectedGuesser = {
    ...styles.selectedButton,
    margin: 0,
    width: "100%",
}

export default function Guesser({player, setNewHummer, winnerId, setWinnerId}) {

    return (
        <View style = {styles.playerComponentContainer}>
            <TouchableOpacity style = {winnerId === player.user_id ? selectedGuesser : guesser} onPress={() => {
                setWinnerId(player.user_id)
                setNewHummer(player)
            }}>
                <Text style = {winnerId === player.user_id ? styles.selectedButtonText : styles.buttonText}>{player.user.username} - {player.points}</Text>
            </TouchableOpacity>
        </View>
    )
}