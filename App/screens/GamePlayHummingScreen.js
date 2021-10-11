import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import SongOption from "../components/SongOption";

export default function GamePlayHummingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Choose Your Song</Text>
            <SongOption song = {"Song 1"}/>
            <SongOption song = {"Song 2"}/>
            <SongOption song = {"Song 3"}/>
            <SongOption song = {"Song 4"}/>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.push("GamePlayGuessing")}>
                <Text style = {styles.buttonText}>Guessed!</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => console.log("Refresh")}>
                <Text style = {styles.buttonText}>Refresh Songs</Text>
            </TouchableOpacity>
        </View>
    )
}