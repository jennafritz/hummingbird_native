import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import styles from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {clearDecades} from "../config/Reducers/DecadesReducer";
import { clearSongGroups } from "../config/Reducers/SongsReducer";
import { getLeaderboard } from "../config/Reducers/PlayersReducer";
import { clearUserGameState } from "../config/Reducers/UserGamesReducer";
import { StackActions } from '@react-navigation/native';
import { useEffect } from "react";
import WinnerMedalComponent from "../components/WinnerMedalComponent";

export default function EndOfGameScreen({navigation}) {

    const dispatch = useDispatch()

    const currentUserGames = useSelector(state => state.userGames.currentUserGames)
    const pointsArray = useSelector(state => state.userGames.pointsStanding)
    const gameWinner = useSelector(state => state.userGames.gameWinner)
    let winnerNameString = gameWinner.map(winner => winner.user.username).join(" & ")
    const turnStyle = useSelector(state => state.games.turnStyle)

    const [gold, setGold] = useState([])
    const [silver, setSilver] = useState([])
    const [bronze, setBronze] = useState([])

    useEffect(() => {
        if(pointsArray.length > 0){
            let goldArray = []
            let silverArray = []
            let bronzeArray = []
            currentUserGames.forEach(userGame => {
                console.log("userGame: ", userGame)
                if(userGame.points === pointsArray[0]) goldArray.push(userGame)
                if(userGame.points === pointsArray[1]) silverArray.push(userGame)
                if(userGame.points === pointsArray[2]) bronzeArray.push(userGame)
            })
            setGold(goldArray)
            setSilver(silverArray)
            setBronze(bronzeArray)
        }
    }, [pointsArray])

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {turnStyle === "zen"
                ?
                <View style={{...styles.winnersContainer, justifyContent: 'center'}}>
                    <Text style={styles.titleText}>{"Thank you\nfor playing!"}</Text>
                </View>
                :
                <>
                    <Text style={styles.pageHeaderText}>Congratulations,</Text>
                    <Text style={styles.pageHeaderText}>{winnerNameString}, you won!</Text>
                    <View style={styles.winnersContainer}>
                        {gold.length
                        ?
                        <>
                            {gold.map(goldWinner => <WinnerMedalComponent tier="gold" key={goldWinner.id} medalist={goldWinner}/>)}
                        </>
                        : 
                        null
                        }
                        {silver.length
                        ?
                        <>
                            {silver.map(silverWinner => <WinnerMedalComponent tier="silver" key={silverWinner.id} medalist={silverWinner}/>)}
                        </>
                        : 
                        null
                        }
                        {bronze.length
                        ?
                        <>
                            {bronze.map(bronzeWinner => <WinnerMedalComponent tier="bronze" key={bronzeWinner.id} medalist={bronzeWinner}/>)}
                        </>
                        : 
                        null
                        }
                    </View>
                </>
                }
                <TouchableOpacity style={styles.nextButton} onPress={ () => {
                    navigation.dispatch(StackActions.popToTop());
                    // dispatch(clearDecades())
                    // dispatch(clearSongGroups())
                    // dispatch(clearUserGameState())
                    }} > 
                    <Text style={styles.buttonText}>Start New Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    dispatch(getLeaderboard())
                        .then(() => navigation.push("Leaderboard")
                        )
                    }}>
                    <Text style={styles.buttonText}>
                        Show Leaderboard
                    </Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}