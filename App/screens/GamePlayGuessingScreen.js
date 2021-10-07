import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";

export default function GamePlayGuessingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Game Guessing Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayPassing")}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}