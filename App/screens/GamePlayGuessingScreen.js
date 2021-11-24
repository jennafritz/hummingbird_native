import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, Alert } from "react-native";
import React from "react";
import styles from "../constants/styles";
// import Player from "../components/Player";
import Guesser from "../components/Guesser";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectHummerWinner, selectHummerNext, findWinner, updateUserGames, updateUserPoints } from "../config/Reducers/UserGamesReducer";
import { addPointsToUsers } from "../config/Reducers/PlayersReducer";
import NextButtons from "../components/NextButtons";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


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

    const pointThreshold = useSelector(state => state.games.pointThreshold)

    const dispatch = useDispatch()

    const finishGame = () => {
        dispatch(findWinner())
        dispatch(updateUserGames())
        dispatch(addPointsToUsers(currentUserGames))
        navigation.push("EndOfGame")
    }

    const addPoints = () => {
        let updatedUserGames = currentUserGames.map(userGame => {
            if(userGame.user_id === winnerId){
                return {
                    ...userGame,
                    points: userGame.points + 10
                }
            } else {
                return userGame
            }
        })
        dispatch(updateUserPoints(updatedUserGames))
        return updatedUserGames
    }

    const guessingScreenNextFunction = () => {

        if(winnerId){
            passStyle === "winner" ? dispatch(selectHummerWinner(newHummer.user_id)) : dispatch(selectHummerNext(currentHummer.user_id))
            let updatedUserGamesArray
            if(turnStyle !== "zen") {
                updatedUserGamesArray = addPoints(winnerId)
            }

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
                    console.log("updatedUserGamesArray: ", updatedUserGamesArray)
                    if(updatedUserGamesArray.some(userGame => userGame.points >= pointThreshold)) {
                        finishGame()
                        console.log("point treshold reached")
                    } else {
                        navigation.push("GamePlayPassing")
                        console.log("currentUserGames: ", currentUserGames)
                        console.log("point threshold not reached")
                    }
                    console.log("pointLimit")
                    break
                default:
                    console.log("default")
            }
            
        } else {
            Alert.alert("Select Winner", "Please select a winner before continuing.")
        }

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

                
                    {turnStyle === "zen"
                    ?
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={{...styles.iconButton, margin: 0}} onPress={() => navigation.goBack()}>
                            <FontAwesome5 style={styles.iconStyle} name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.iconButton, margin: 0}} onPress={() => navigation.push("EndOfGame")}>
                            <Ionicons style={styles.iconStyle} name="close" size={35} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.iconButton, margin: 0}} onPress={guessingScreenNextFunction}>
                            <FontAwesome5 style={styles.iconStyle} name="arrow-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    :
                    <NextButtons forwardButtonFunction={guessingScreenNextFunction}/>
                    }
                </View>                
        </View>
    )
}