import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { findWinner } from "../config/Reducers/UserGamesReducer";
import { updateUserGames } from "../config/Reducers/UserGamesReducer";

export default function GamePlayPassingScreen({navigation}) {

    const currentHummer = useSelector(state => state.userGames.currentHummer)
    const dispatch = useDispatch()
    const finalUserGames = useSelector(state => state.userGames.currentUserGames)

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{`Pass to ${currentHummer.user.username}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayHumming")}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.push("EndOfGame")
                dispatch(findWinner())
                dispatch(updateUserGames(finalUserGames))}}>
                <Text style={styles.buttonText}>Finish Game</Text>
            </TouchableOpacity>
        </View>
    )
}