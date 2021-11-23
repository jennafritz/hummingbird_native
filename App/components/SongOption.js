import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Dimensions, DynamicColorIOS } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from "../constants/styles";
import colors from "../constants/colors";


const screen = Dimensions.get("window")

const buttonContainer = {
    ...styles.container,
    // width: "80%"
    width: 300,
    // minHeight: '25%',
    // marginVertical: screen.height * .025
}

const selectedSongOptionButton = {
    ...styles.songOptionButton,
    backgroundColor: colors.darkBlue
}


export default function SongOption({song, setFeaturedSong, featuredSong}) {

    return (
        <View style = {buttonContainer}>
            <TouchableOpacity style = {song.id === featuredSong.id ? selectedSongOptionButton : styles.songOptionButton} onPress={() => setFeaturedSong(song)}>
                <Text numberOfLines={1} style = {styles.buttonText}>{song.title}</Text>
            </TouchableOpacity>
        </View>
    )
}