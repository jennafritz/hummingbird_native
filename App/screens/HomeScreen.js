import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";
import styles from "../constants/styles";

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Hummingbird</Text>
            <Image source={require('../assets/hummingbirdcopy.png')} style={styles.logo}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("PlayerSetup")}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}