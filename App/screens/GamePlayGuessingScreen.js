import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "../constants/styles";
// import Player from "../components/Player";
import SelectWinner from "../components/SelectWinner";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectHummerWinner, selectHummerNext, findWinner, updateUserGames } from "../config/Reducers/UserGamesReducer";
import { addPointsToUsers } from "../config/Reducers/PlayersReducer";

export default function GamePlayGuessingScreen({navigation}) {

    
    const currentUserGames = useSelector(state => state.userGames.currentUserGames)
    const currentHummer = useSelector(state => state.userGames.currentHummer)
    const turnStyle = useSelector(state => state.games.turnStyle)
    const passStyle = useSelector(state => state.games.passStyle)
    const remainingTurns = useSelector(state => state.games.remainingTurns)

    let currentGuessers = currentUserGames.filter(player => player.user_id !== currentHummer.user_id)
    
    const [newHummer, setNewHummer] = useState(currentHummer)

    const dispatch = useDispatch()

    const finishGame = () => {
        dispatch(findWinner())
        dispatch(updateUserGames())
        dispatch(addPointsToUsers(currentUserGames))
        navigation.push("EndOfGame")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Select Winner</Text>
            <FlatList keyExtractor={currentGuesser => currentGuesser.id.toString()} data={currentGuessers} renderItem={({item}) => <SelectWinner player = {item} setNewHummer={setNewHummer}/>}/>
            <TouchableOpacity style={styles.button} onPress={() => {
                passStyle === "winner" ? dispatch(selectHummerWinner(newHummer.user_id)) : dispatch(selectHummerNext(currentHummer.user_id))

                switch (turnStyle){
                    case "countdown":
                        if(remainingTurns === 0){
                            finishGame()
                        } else {
                            navigation.push("GamePlayPassing")
                        }
                        console.log("countdown")
                        break
                    case "zen":
                        navigation.push("GamePlayPassing")
                        console.log("zen")
                        break
                    case "pointLimit":
                        if(currentUserGames.some(userGame => userGame.points === 100)) {
                            finishGame()
                        } else {
                            navigation.push("GamePlayPassing")
                        }
                        console.log("pointLimit")
                        break
                    default:
                        console.log("default")
                }
            }}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            {turnStyle === "zen" ? <TouchableOpacity style={styles.button} onPress={() => {
                finishGame()
                }}>
                <Text style={styles.buttonText}>Finish Game</Text>
            </TouchableOpacity> : null}
        </View>
    )
}