import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import Player from "../components/Player";

export default function GamePlayGuessingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Select Winner</Text>
            <Player player = {"Player 1"}/>
            <Player player = {"Player 2"}/>
            <Player player = {"Player 3"}/>
            <Player player = {"Player 4"}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayPassing")}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}