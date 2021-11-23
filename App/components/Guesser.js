import React from "react";
// import {  } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
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

    const turnStyle = useSelector(state => state.games.turnStyle)

    return (
        <View style = {styles.playerComponentContainer}>
            <TouchableOpacity style = {winnerId === player.user_id ? selectedGuesser : guesser} onPress={() => {
                setWinnerId(player.user_id)
                setNewHummer(player)
            }}>
                {turnStyle === "zen"
                ?
                <Text style = {styles.buttonText}>{player.user.username}</Text>
                :
                <Text style = {styles.buttonText}>{player.user.username} - {player.points}</Text>
            }
            </TouchableOpacity>
        </View>
    )
}