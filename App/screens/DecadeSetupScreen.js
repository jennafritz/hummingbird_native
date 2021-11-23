import { View, Text, TouchableOpacity, Alert, Dimensions} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../constants/styles'
import DecadeButton from '../components/DecadeButton'
import NextButtons from '../components/NextButtons'

const screen = Dimensions.get("window")

const decadeButtonContainer ={
    ...styles.mainContentContainer,
    justifyContent: "space-around",
    width: screen.width * 0.5,
}

export default function DecadeSetupScreen({ navigation }) {

    const selectedDecades = useSelector(state => state.decades.selectedDecades)

    const decadeScreenForwardButton = () => {
        if (selectedDecades.length > 0) {
            navigation.push("GameStyleSetup")
        } else {
            Alert.alert("Select Decades", "Please choose at least one decade to continue.")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style = {styles.pageHeaderText}>Choose Decades</Text>
                <View style={decadeButtonContainer}>
                    <DecadeButton decade = {{name: "50's", value: 1950}}/>
                    <DecadeButton decade = {{name: "60's", value: 1960}}/>
                    <DecadeButton decade = {{name: "70's", value: 1970}}/>
                    <DecadeButton decade = {{name: "80's", value: 1980}}/>
                    <DecadeButton decade = {{name: "90's", value: 1990}}/>
                    <DecadeButton decade = {{name: "00's", value: 2000}}/>
                    <DecadeButton decade = {{name: "10's", value: 2010}}/>
                    <DecadeButton decade = {{name: "20's", value: 2020}}/>
                </View>

                <NextButtons forwardButtonFunction={decadeScreenForwardButton}/>
            </View>
        </View>
    )
}