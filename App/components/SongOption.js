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




export default function SongOption({song, setFeaturedSong, featuredSong}) {

    return (
        <>
        {featuredSong === song.id
        ?
            <View style = {buttonContainer}>
                <ScrollView 
                    style = {styles.songOptionButton} 
                    onPress={() => setFeaturedSong(undefined)}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style = {{...styles.buttonText, fontSize: 30, paddingTop: 10}}>{song.title}</Text>
                    <Text style = {{...styles.buttonText, fontSize: 20}}>{song.artist}</Text>
                    <Text style = {{...styles.buttonText, fontSize: 20}}>{song.year}</Text>
                </ScrollView>
            </View>  
        :
            <View style = {buttonContainer}>
                <TouchableOpacity style = {styles.songOptionButton} onPress={() => setFeaturedSong(song.id)}>
                    <Text numberOfLines={1} style = {styles.buttonText}>{song.title}</Text>
                </TouchableOpacity>
            </View>
        }
        </> 

    )
}