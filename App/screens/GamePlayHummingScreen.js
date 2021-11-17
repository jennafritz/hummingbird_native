import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../constants/styles";
import SongOption from "../components/SongOption";
import { getCurrentSongs } from "../config/Reducers/SongsReducer";
import { current } from "immer";
import SongOptionCopy from "../components/SongOption copy";

const mapView = {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 2
}

const displayView = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
    // width: 75% of screen width
}

export default function GamePlayHummingScreen({navigation}) {

    const currentSongs = useSelector(state => state.songs.currentSongs)

    const selectedDecades = useSelector(state => state.decades.selectedDecades)

    const songGroups = useSelector(state => state.songs.songGroups)

    const dispatch = useDispatch()

    const [featuredSong, setFeaturedSong] = useState(undefined)

    let displaySong = featuredSong ? currentSongs.find(song => song.id === featuredSong) : currentSongs[0]

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.pageHeaderText}>Choose Your Song</Text>
                {/* <FlatList 
                    scrollEnabled={false} 
                    keyExtractor={songObj => songObj.id.toString()} 
                    data={currentSongs} 
                    renderItem={({item}) => <SongOption song = {item} setFeaturedSong={setFeaturedSong} featuredSong={featuredSong}/>}
                /> */}
                <View style={mapView}>
                    {currentSongs.map(song => <SongOptionCopy id={song.id} song={song} setFeaturedSong={setFeaturedSong} featuredSong={featuredSong} />)}
                </View>

                <View style={displayView}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={{...styles.buttonText, textAlign: 'left', minWidth: 100}}>Title: </Text>
                        <Text style={{...styles.buttonText, textAlign: 'left'}}>{displaySong.title}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text style={{...styles.buttonText, textAlign: 'left', minWidth: 100}}>Artist: </Text>
                        <Text style={{...styles.buttonText, textAlign: 'left'}}>{displaySong.artist}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text style={{...styles.buttonText, textAlign: 'left', minWidth: 100}}>Year: </Text>
                        <Text style={{...styles.buttonText, textAlign: 'left'}}>{displaySong.year}</Text>
                    </View>
                </View>


                {/* <TouchableOpacity style = {styles.button} onPress={() => navigation.push("GamePlayGuessing")}>
                    <Text style = {styles.buttonText}>Guessed!</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style = {styles.button} onPress={() => dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups}))}>
                    <Text style = {styles.buttonText}>Refresh Songs</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}