import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";

export default function GamePlayPassingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Pass to ______</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayHumming")}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("EndOfGame")}>
                <Text style={styles.buttonText}>Finish Game</Text>
            </TouchableOpacity>
        </View>
    )
}