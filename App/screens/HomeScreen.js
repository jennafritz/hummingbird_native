import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: '20%',
        marginTop: 75
    },
    text: {
        fontSize: 40,
        color: colors.color,
    },
    buttonText: {
        fontSize: 25,
        color: colors.color,
        padding: 5
    },
    button: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 25
    }
})

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hummingbird</Text>
            <Image source={require('../assets/hummingbirdcopy.png')} style={styles.logo}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("PlayerSetup")}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}