import React from "react";
// import {  } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { View, Text } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";


const buttonContainer = {
    ...styles.container,
    width: "80%"
}

const leaderboardContainer = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    width: '100%'
}

const leaderboardDivisionLine = {
    borderBottomWidth: .3,
    borderBottomStyle: "solid",
    borderColor: colors.color
}

const userNameStyle = {
    ...styles.buttonText, 
    textAlign: 'left', 
    flex: 2,
    fontSize: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red'
}

const userPointsStyle = {
    ...styles.buttonText, 
    textAlign: 'right', 
    flex: 1,
    fontSize: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'blue'
}


export default function LeaderboardItem({playerInfo}) {

    const leaders = useSelector(state => state.players.topPlayers)
    
    return (
        <View style = {playerInfo.id === leaders[leaders.length - 1].id ? leaderboardContainer : {...leaderboardContainer, ...leaderboardDivisionLine}}>
            <Text numberOfLines={1} style={userNameStyle}>{playerInfo.username}</Text>
            <Text style={userPointsStyle}>{playerInfo.points}</Text>
        </View>
    )
}