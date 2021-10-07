import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import SongOption from "../components/SongOption";

export default function GamePlayHummingScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Game Humming Screen</Text>
            <SongOption song = {"Song 1"}/>
            <SongOption song = {"Song 2"}/>
            <SongOption song = {"Song 3"}/>
            <SongOption song = {"Song 4"}/>
        </View>
    )
}