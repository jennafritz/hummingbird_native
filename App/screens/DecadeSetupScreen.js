import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../constants/styles'
import DecadeButton from '../components/DecadeButton'
import { getCurrentSongs } from '../config/Reducers/SongsReducer'

const decadeButtonContainer ={
    ...styles.container,
    justifyContent: "space-around",
}



export default function DecadeSetupScreen({ navigation }) {
    const dispatch = useDispatch()

    const selectedDecades = useSelector(state => state.decades.selectedDecades)

    const songGroups = useSelector(state => state.songs.songGroups)

    return (
        <View style={decadeButtonContainer}>
            <Text style = {styles.titleText}>Choose Decades</Text>
            <DecadeButton decade = {{name: "50's", value: 1950}}/>
            <DecadeButton decade = {{name: "60's", value: 1960}}/>
            <DecadeButton decade = {{name: "70's", value: 1970}}/>
            <DecadeButton decade = {{name: "80's", value: 1980}}/>
            <DecadeButton decade = {{name: "90's", value: 1990}}/>
            <DecadeButton decade = {{name: "00's", value: 2000}}/>
            <DecadeButton decade = {{name: "10's", value: 2010}}/>
            <DecadeButton decade = {{name: "20's", value: 2020}}/>
            <TouchableOpacity style = {styles.button} onPress = {() => {
                navigation.push("GameStyleSetup")
                dispatch(getCurrentSongs({decades: selectedDecades, numGroups: songGroups})
                )}}>
                <Text style = {styles.buttonText}>
                    Start Game
                </Text>
            </TouchableOpacity>
        </View>
    )
}