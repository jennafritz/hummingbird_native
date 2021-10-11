import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
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


export default function Player({player}) {
    return (
        // <div className="player-div">
        //         <div className="player"> {this.props.player.username}
        //             <button className="remove-btn" onClick={() => this.props.removePlayers(this.props.player)}>x</button>
        //         </div>

        // </div>
        <View style = {buttonContainer}>
            <TouchableOpacity style = {decadeButton}>
                <Text style = {styles.buttonText}>{player}</Text>
            </TouchableOpacity>
        </View>
    )
}