import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import LeaderboardItem from '../components/LeaderboardItem'
import { useDispatch } from 'react-redux'
import { clearDecades } from '../config/Reducers/DecadesReducer'
import { clearSongGroups } from '../config/Reducers/SongsReducer'


const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function LeaderboardScreen({ navigation }) {

    const dispatch = useDispatch()

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Leaderboard</Text>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <LeaderboardItem playerInfo = {{name: "Sean", points: 20}}/>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.push("Home")
                dispatch(clearDecades())
                dispatch(clearSongGroups())}}>
                <Text style={styles.buttonText}>
                    Start New Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}