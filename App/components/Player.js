import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from "../constants/styles";
import colors from "../constants/colors";
import { useDispatch } from "react-redux";
import {Feather} from '@expo/vector-icons'
import { removePlayer } from "../config/Reducers/PlayersReducer";

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%"
}

const buttonContainer = {
    ...styles.container,
    // width: "80%"
    width: 200
}

const xStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 2,
    paddingRight: 2,
    zIndex: 1,
    color: colors.color
}


export default function Player({player}) {

    const dispatch = useDispatch()

    return (
        <View style = {buttonContainer}>
            <View style = {decadeButton} >
                <Feather style={xStyle} name="x" size={20} onPress = {() => dispatch(removePlayer(player.id))} />
                <Text style = {styles.buttonText}>
                    {player.username}
                </Text>
            </View>
        </View>
    )
}