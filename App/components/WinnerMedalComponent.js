import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../constants/styles"

const medalImage = {
    "gold": require("../assets/Gold-Medal.png"),
    "silver": require("../assets/Silver-Medal.png"),
    "bronze": require("../assets/Bronze-Medal.png")
}

const usernameStyle = {
    ...styles.buttonText, 
    textAlign: 'left',
    // flex: 4,
    fontSize: 20,
}

const pointStyle = {
    ...styles.buttonText, 
    textAlign: 'left',
    // flex: 4,
    fontSize: 20,
}

const medalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red'
}

const usernameViewStyle = {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'blue'
}

const pointViewStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'blue'
}

const medalistContainer = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%',
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'black'
}

export default function WinnerMedalComponent({tier, medalist}) {
    let imageSrc = medalImage[tier]
    return(
        <View style={medalistContainer}>
            <View style={medalStyle}>
                <Image source={medalImage[tier]} style={{height: 40, width: 40}}/>
            </View>
            <View style={usernameViewStyle}>
                <Text style={usernameStyle} key={medalist.id}>{medalist.user.username}</Text>
            </View>
            <View style={pointViewStyle}>
                <Text style={pointStyle} key={medalist.id}>{medalist.points}</Text>
            </View>
        </View>
    )
}