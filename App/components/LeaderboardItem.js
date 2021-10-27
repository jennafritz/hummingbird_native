import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text } from 'react-native'
import styles from "../constants/styles";

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",
}

const buttonContainer = {
    ...styles.container,
    width: "80%"
}


export default function LeaderboardItem({playerInfo}) {
    return (
        <View style = {buttonContainer}>
            <Text style = {styles.buttonText}>{`${playerInfo.username}.....${playerInfo.points}`}</Text>
        </View>
    )
}