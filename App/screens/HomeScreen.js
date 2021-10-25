import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useEffect} from "react";
import colors from "../constants/colors";
import styles from "../constants/styles";
import { useDispatch } from "react-redux";
import { clearSongGroups } from "../config/Reducers/SongsReducer";
import { clearDecades } from "../config/Reducers/DecadesReducer";
import { clearUserGameState } from "../config/Reducers/UserGamesReducer";

export default function HomeScreen({navigation}) {

    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Hummingbird</Text>
            <Image source={require('../assets/hummingbirdcopy.png')} style={styles.logo}/>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.push("PlayerSetup")
                dispatch(clearDecades())
                dispatch(clearSongGroups())
                dispatch(clearUserGameState())
            }}>
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    )
}