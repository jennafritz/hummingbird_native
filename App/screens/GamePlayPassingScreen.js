import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { findWinner, updateUserGames } from "../config/Reducers/UserGamesReducer";
import { getCurrentSongs } from "../config/Reducers/SongsReducer";
import { addPointsToUsers } from "../config/Reducers/PlayersReducer";
import { decrementTurns } from "../config/Reducers/GamesReducer";

export default function GamePlayPassingScreen({navigation}) {

    const currentHummer = useSelector(state => state.userGames.currentHummer)
    const dispatch = useDispatch()
    const finalUserGames = useSelector(state => state.userGames.currentUserGames)
    const selectedDecades = useSelector(state => state.decades.selectedDecades)
    const songGroups = useSelector(state => state.songs.songGroups)
    const remainingTurns = useSelector(state => state.games.remainingTurns)
    const turnStyle = useSelector(state => state.games.turnStyle)


    return(
        <View style={styles.container}>
            {turnStyle === "countdown" ? <Text style={styles.titleText}>{`Remaining Turns: ${remainingTurns}`}</Text> : null}
            <Text style={styles.titleText}>{`Pass to ${currentHummer.user.username}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups}))
                .then(() => navigation.push("GamePlayHumming"))
                .then(() => dispatch(decrementTurns()))
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}