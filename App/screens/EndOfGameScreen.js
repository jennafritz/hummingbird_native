import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import Leaderboard from "../components/LeaderboardContainer";

export default function EndOfGameScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Congratulations, _____, you won with ___ points!</Text>
            <Leaderboard />
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("PlayerSetup")}>
                <Text style={styles.buttonText}>Start New Game</Text>
            </TouchableOpacity>
        </View>
    )
}