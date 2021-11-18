import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import colors from '../constants/colors'
import LeaderboardItem from '../components/LeaderboardItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearDecades } from '../config/Reducers/DecadesReducer'
import { clearSongGroups } from '../config/Reducers/SongsReducer'
import { clearUserGameState } from '../config/Reducers/UserGamesReducer'
import { StackActions } from '@react-navigation/routers'

const screen = Dimensions.get("window")

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}

const leaderboardView = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    width: screen.width * 0.6,
}

export default function LeaderboardScreen({ navigation }) {

    const dispatch = useDispatch()

    const leaders = useSelector(state => state.players.topPlayers)

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style = {styles.pageHeaderText}>Leaderboard</Text>
                <View style={leaderboardView}>
                    {leaders.map(leader => <LeaderboardItem key={leader.id} playerInfo={leader}/>)}
                </View>
                {/* <FlatList 
                    data={leaders} 
                    keyExtractor={leader => leader.id.toString()}
                    renderItem={({item}) => <LeaderboardItem playerInfo={item}/>}
                /> */}
                <TouchableOpacity style={styles.nextButton} onPress={() => {
                    navigation.dispatch(StackActions.popToTop());
                    // dispatch(clearDecades())
                    // dispatch(clearSongGroups())
                    // dispatch(clearUserGameState())
                    }}>
                    <Text style={styles.buttonText}>
                        New Game
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}