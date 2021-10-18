import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import Leaderboard from "../components/LeaderboardContainer";
import { useDispatch } from "react-redux";
import {clearDecades} from "../config/Reducers/DecadesReducer";
import { clearSongGroups } from "../config/Reducers/SongsReducer";

export default function EndOfGameScreen({navigation}) {

    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Congratulations, _____, you won with ___ points!</Text>
            <Leaderboard />
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.push("PlayerSetup")
                dispatch(clearDecades())
                dispatch(clearSongGroups())}} > 
                <Text style={styles.buttonText}>Start New Game</Text>
            </TouchableOpacity>
        </View>
    )
}