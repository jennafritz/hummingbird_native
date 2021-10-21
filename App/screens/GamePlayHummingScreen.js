import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../constants/styles";
import SongOption from "../components/SongOption";
import { getCurrentSongs } from "../config/Reducers/SongsReducer";

export default function GamePlayHummingScreen({navigation}) {

    const currentSongs = useSelector(state => state.songs.currentSongs)

    const selectedDecades = useSelector(state => state.decades.selectedDecades)

    const songGroups = useSelector(state => state.songs.songGroups)

    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Choose Your Song</Text>
            <FlatList scrollEnabled={false} keyExtractor={songObj => songObj.id.toString()} data={currentSongs} renderItem={({item}) => <SongOption song = {item}/>}/>
            {/* {currentSongs.map(songObj => <SongOption song={songObj} key={songObj.id}/>)} */}
            <TouchableOpacity style = {styles.button} onPress={() => navigation.push("GamePlayGuessing")}>
                <Text style = {styles.buttonText}>Guessed!</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups}))}>
                <Text style = {styles.buttonText}>Refresh Songs</Text>
            </TouchableOpacity>
        </View>
    )
}