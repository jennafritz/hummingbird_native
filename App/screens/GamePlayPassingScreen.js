import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { findWinner } from "../config/Reducers/UserGamesReducer";
import { updateUserGames } from "../config/Reducers/UserGamesReducer";
import { getCurrentSongs } from "../config/Reducers/SongsReducer";
import { addPointsToUsers } from "../config/Reducers/PlayersReducer";

export default function GamePlayPassingScreen({navigation}) {

    const currentHummer = useSelector(state => state.userGames.currentHummer)
    const dispatch = useDispatch()
    const finalUserGames = useSelector(state => state.userGames.currentUserGames)
    const selectedDecades = useSelector(state => state.decades.selectedDecades)
    const songGroups = useSelector(state => state.songs.songGroups)
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{`Pass to ${currentHummer.user.username}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups}))
                .then(() => navigation.push("GamePlayHumming"))
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                console.log("finalUserGames: ", finalUserGames)
                dispatch(findWinner())
                dispatch(updateUserGames())
                dispatch(addPointsToUsers(finalUserGames))
                navigation.push("EndOfGame")
                }}>
                <Text style={styles.buttonText}>Finish Game</Text>
            </TouchableOpacity>
        </View>
    )
}