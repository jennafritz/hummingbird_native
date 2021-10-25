import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import LeaderboardItem from '../components/LeaderboardItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearDecades } from '../config/Reducers/DecadesReducer'
import { clearSongGroups } from '../config/Reducers/SongsReducer'
import { clearUserGameState } from '../config/Reducers/UserGamesReducer'
import { StackActions } from '@react-navigation/routers'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

export default function LeaderboardScreen({ navigation }) {

    const dispatch = useDispatch()

    const leaders = useSelector(state => state.players.topPlayers)

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Leaderboard</Text>
            <FlatList 
                data={leaders} 
                keyExtractor={leader => leader.id.toString()}
                renderItem={({item}) => <LeaderboardItem playerInfo={item}/>}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.dispatch(StackActions.popToTop());
                // dispatch(clearDecades())
                // dispatch(clearSongGroups())
                // dispatch(clearUserGameState())
                }}>
                <Text style={styles.buttonText}>
                    Start New Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}