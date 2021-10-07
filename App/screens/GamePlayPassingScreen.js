import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";

export default function GamePlayPassingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Game Passing Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayHumming")}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}