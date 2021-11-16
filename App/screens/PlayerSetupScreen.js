import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import styles from '../constants/styles'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import { Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../constants/colors'

const plusStyle = {
    color: colors.color,
    padding: 25,
}

export default function PlayerSetupScreen({ navigation }) {

    const currentPlayers = useSelector(state => state.players.currentPlayers)

    const [renderOption, setRenderOption] = useState("addPlayer")
    const [showForm, setShowForm] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Text style={styles.pageHeaderText}>Add Players</Text>

                <View style={styles.mainContentContainer}>
                        <FlatList
                            keyExtractor={playerObj => playerObj.id.toString()} 
                            data={currentPlayers} 
                            renderItem={({item}) => <Player player = {item}/>}/>
                    {renderOption === "addPlayer" ? <AntDesign name="pluscircleo" size={24} style={plusStyle} onPress={() => setShowForm(true)}/> : null}
                
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showForm}
                        onRequestClose={() => setShowForm(false)}
                    >
                        <LoginForm setRenderOption={setRenderOption} setShowForm={setShowForm}/> 
                    </Modal>

                    {renderOption === "register" ? <RegisterForm setRenderOption={setRenderOption}/> : null}
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push("DecadeSetup")}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}