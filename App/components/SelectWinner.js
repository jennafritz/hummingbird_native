import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from "../constants/styles";

export default function SelectWinner({player, setNewHummer, winnerId, setWinnerId}) {

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {winnerId === player.user_id ? styles.selectedButton : styles.button} onPress={() => {
                setWinnerId(player.user_id)
                setNewHummer(player)
            }}>
                <Text style = {winnerId === player.user_id ? styles.selectedButtonText : styles.buttonText}>{player.user.username} - {player.points}</Text>
            </TouchableOpacity>
        </View>
    )
}