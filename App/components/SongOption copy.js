import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from "../constants/styles";


const screen = Dimensions.get("window")

const decadeButton = {
    ...styles.button,
    margin: 0,
    width: "100%",
}

const buttonContainer = {
    ...styles.container,
    // width: "80%"
    width: 300,
    // minHeight: '25%',
    // marginVertical: screen.height * .025
}




export default function SongOptionCopy({song, setFeaturedSong}) {

    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {styles.songOptionButton} onPress={() => setFeaturedSong(song.id)}>
                <Text numberOfLines={1} style = {styles.buttonText}>{song.title}</Text>
            </TouchableOpacity>
        </View>
    )
}