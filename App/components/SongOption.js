import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Dimensions, DynamicColorIOS } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from "../constants/styles";
import colors from "../constants/colors";


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

const selectedSongOptionButton = {
    ...styles.songOptionButton,
    backgroundColor: colors.color
}


export default function SongOption({song, setFeaturedSong, featuredSong}) {

    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {song.id === featuredSong.id ? selectedSongOptionButton : styles.songOptionButton} onPress={() => setFeaturedSong(song)}>
                <Text numberOfLines={1} style = {song.id === featuredSong.id ? styles.selectedButtonText :styles.buttonText}>{song.title}</Text>
            </TouchableOpacity>
        </View>
    )
}