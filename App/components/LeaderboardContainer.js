import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import LeaderboardItem from './LeaderboardItem'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function Leaderboard({ navigation }) {
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
        </View>
    )
}