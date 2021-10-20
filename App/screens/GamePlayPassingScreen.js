import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import { useSelector } from "react-redux";

export default function GamePlayPassingScreen({navigation}) {

    const currentHummer = useSelector(state => state.userGames.currentHummer)
    console.log("currentHummer: ", currentHummer)

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{`Pass to ${currentHummer.user.username}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("GamePlayHumming")}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("EndOfGame")}>
                <Text style={styles.buttonText}>Finish Game</Text>
            </TouchableOpacity>
        </View>
    )
}