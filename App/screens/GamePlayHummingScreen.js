import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from "react-native";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../constants/styles";
import SongOption from "../components/SongOption";
import { getCurrentSongs } from "../config/Reducers/SongsReducer";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../constants/colors";
import { Entypo } from '@expo/vector-icons';

const screen = Dimensions.get("window")

const mapView = {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 2
}

const displayView = {
    flex: 1,
    display: 'flex',
    // justifyContent: 'space-between',
    marginTop: 10,
    width: screen.width * 0.75,

}

const songDetailView = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    width: '100%',
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "red"

}

const songDetailHeader = {
    ...styles.buttonText, 
    textAlign: 'left', 
    flex: 2,
    fontSize: 20,
}

const songDetailInfo = {
    ...styles.buttonText, 
    textAlign: 'left', 
    flex: 5,
    fontSize: 20,
}

const iconStyle = {
    color: colors.color,
    padding:10
}

const iconContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

const iconButton = {
    ...styles.button,
    marginBottom: 0,
    minWidth: screen.width * (1/7),
    minHeight: screen.width * (1/7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightPurple,

}

export default function GamePlayHummingScreen({navigation}) {

    const currentSongs = useSelector(state => state.songs.currentSongs)

    const selectedDecades = useSelector(state => state.decades.selectedDecades)

    const songGroups = useSelector(state => state.songs.songGroups)

    const dispatch = useDispatch()

    const [featuredSong, setFeaturedSong] = useState(currentSongs[0])

    // let displaySong = featuredSong ? currentSongs.find(song => song.id === featuredSong) : currentSongs[0]

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
                    {currentSongs.map(song => <SongOption key={song.id} song={song} setFeaturedSong={setFeaturedSong} featuredSong={featuredSong} />)}
                </View>

                <ScrollView showsVerticalScrollIndicator={false}  style={displayView}>
                    <View style={songDetailView}>
                        <Text style={songDetailHeader}>Title: </Text>
                        <Text style={songDetailInfo}>{!!featuredSong ? featuredSong.title : currentSongs[0].title}</Text>
                    </View>
                    <View style={songDetailView}>
                        <Text style={songDetailHeader}>Artist: </Text>
                        <Text style={songDetailInfo}>{!!featuredSong ? featuredSong.artist : currentSongs[0].artist}</Text>
                    </View>
                    <View style={songDetailView}>
                        <Text style={songDetailHeader}>Year: </Text>
                        <Text style={songDetailInfo}>{!!featuredSong ? featuredSong.year : currentSongs[0].year}</Text>
                    </View>
                </ScrollView>

                <View style={iconContainer}>
                    <TouchableOpacity style = {iconButton} onPress={() => {
                            dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups}))
                            .then((response) => setFeaturedSong(response.payload[0]))
                            }}>
                        <FontAwesome style={iconStyle} name="refresh" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {iconButton} onPress={() => navigation.push("GamePlayGuessing")}>
                        <Entypo style={iconStyle} name="check" size={24} color="black" /> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}