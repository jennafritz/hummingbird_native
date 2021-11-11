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

    // options:
        // addPlayer - +
        // loginOrRegister - two buttons
        // login - login form
        // register - register form

    const [renderOption, setRenderOption] = useState("addPlayer")
    const [showForm, setShowForm] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Text style={styles.pageHeaderText}>Player Setup Screen</Text>

                <View style={styles.mainContentContainer}>
                        <FlatList
                            keyExtractor={playerObj => playerObj.id.toString()} 
                            data={currentPlayers} 
                            renderItem={({item}) => <Player player = {item}/>}/>
                    {renderOption === "addPlayer" ? <AntDesign name="pluscircleo" size={24} style={plusStyle} onPress={() => setShowForm(true)}/> : null}
                    {/* {renderOption === "loginOrRegister" ? 
                        <View style={styles.loginOrRegister}>
                            
                            <TouchableOpacity style = {formButtonStyle} onPress={() =>  {
                                setShowLoginModal(true)
                                setRenderOption("login")
                                }}>
                                <Text style = {styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {formButtonStyle} onPress={() => setRenderOption("register")}>
                                <Text style = {styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        : null} */}

                    {/* {renderOption === "loginOrRegister" ?  */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showForm}
                            onRequestClose={() => setShowForm(false)}
                        >
                            <LoginForm setRenderOption={setRenderOption} setShowForm={setShowForm}/> 
                        </Modal>
                    {/* : null} */}

                    {renderOption === "register" ? <RegisterForm setRenderOption={setRenderOption}/> : null}
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push("DecadeSetup")}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}