import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import styles from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {clearDecades} from "../config/Reducers/DecadesReducer";
import { clearSongGroups } from "../config/Reducers/SongsReducer";

export default function EndOfGameScreen({navigation}) {

    const dispatch = useDispatch()

    const currentUserGames = useSelector(state => state.userGames.currentUserGames)

    const gameWinner = useSelector(state => state.userGames.gameWinner)


    let winnerNameString = gameWinner.map(winner => winner.user.username).join(" & ")

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Congratulations, {winnerNameString}, you won with {gameWinner[0].points} points!</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.push("PlayerSetup")
                dispatch(clearDecades())
                dispatch(clearSongGroups())}} > 
                <Text style={styles.buttonText}>Start New Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.push("Leaderboard")}}>
                <Text style={styles.buttonText}>
                    Show Leaderboard
                </Text>
            </TouchableOpacity>
        </View>
    )
}