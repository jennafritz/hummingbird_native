import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "../constants/styles";
// import Player from "../components/Player";
import Guesser from "../components/Guesser";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectHummerWinner, selectHummerNext, findWinner, updateUserGames, addPoints } from "../config/Reducers/UserGamesReducer";
import { addPointsToUsers } from "../config/Reducers/PlayersReducer";

const screen = Dimensions.get("window")

const nextScreenButton = {
    ...styles.nextButton,
    flex: 1,
    marginHorizontal: screen.width * .05
}

const nextScreenButtonContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

export default function GamePlayGuessingScreen({navigation}) {

    
    const currentUserGames = useSelector(state => state.userGames.currentUserGames)
    const currentHummer = useSelector(state => state.userGames.currentHummer)
    const turnStyle = useSelector(state => state.games.turnStyle)
    const passStyle = useSelector(state => state.games.passStyle)
    const remainingTurns = useSelector(state => state.games.remainingTurns)

    let currentGuessers = currentUserGames.filter(player => player.user_id !== currentHummer.user_id)
    
    const [newHummer, setNewHummer] = useState(currentHummer)
    const [winnerId, setWinnerId] = useState("")

    const dispatch = useDispatch()

    const finishGame = () => {
        dispatch(addPoints(winnerId))
        dispatch(findWinner())
        dispatch(updateUserGames())
        dispatch(addPointsToUsers(currentUserGames))
        navigation.push("EndOfGame")
    }

    const guesserList = {
        justifyContent:"space-evenly",
        // minHeight: '100%',
        flex: 1,

    }

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.pageHeaderText}>Select Winner</Text>
                <View style={guesserList}>
                    {currentGuessers.map(guesser => <Guesser 
                        key={guesser.id} 
                        player = {guesser} 
                        setNewHummer={setNewHummer} 
                        winnerId={winnerId} 
                        setWinnerId={setWinnerId}
                    />)}
                </View>
                {/* <FlatList
                contentContainerStyle={guesserList} 
                keyExtractor={currentGuesser => currentGuesser.id.toString()} 
                data={currentGuessers} renderItem={({item}) => 
                <Guesser player = {item} setNewHummer={setNewHummer} winnerId={winnerId} setWinnerId={setWinnerId}/>}
                /> */}

                <View style={nextScreenButtonContainer}>
                    {turnStyle === "zen" ? 
                    <TouchableOpacity style={nextScreenButton} onPress={() => {
                        finishGame()
                        }}>
                        <Text style={styles.buttonText}>End Game</Text>
                    </TouchableOpacity> : null}
                    
                    <TouchableOpacity style={turnStyle === "zen" ? nextScreenButton : styles.nextButton} onPress={() => {
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

                        dispatch(addPoints(winnerId))
                    }}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </View>
    )
}