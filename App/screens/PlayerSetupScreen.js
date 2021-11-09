import { View, Text, TouchableOpacity, FlatList } from 'react-native'
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
    color: colors.color
}

export default function PlayerSetupScreen({ navigation }) {

    const currentPlayers = useSelector(state => state.players.currentPlayers)

    // options:
        // addPlayer - +
        // loginOrRegister - two buttons
        // login - login form
        // register - register form

    const [renderOption, setRenderOption] = useState("addPlayer")

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>Player Setup Screen</Text>
                <View >
                    {/* <TouchableOpacity onPress={() => fetch("http://10.0.2.2:3000/test").then(response => response.json()).then(response => console.log("response: ", response))}>
                        <Text>Test</Text>
                    </TouchableOpacity> */}
                    <FlatList keyExtractor={playerObj => playerObj.id.toString()} data={currentPlayers} renderItem={({item}) => <Player player = {item}/>}/>
                    {renderOption === "addPlayer" ? <AntDesign name="pluscircleo" size={24} style={plusStyle} onPress={() => setRenderOption("loginOrRegister")}/> : null}
                    {renderOption === "loginOrRegister" ? 
                        <View>
                            <TouchableOpacity style = {styles.button} onPress={() => setRenderOption("login")}>
                                <Text style = {styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.button} onPress={() => setRenderOption("register")}>
                                <Text style = {styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        : null}
                    {renderOption === "login" ? <LoginForm setRenderOption={setRenderOption}/> : null}
                    {renderOption === "register" ? <RegisterForm setRenderOption={setRenderOption}/> : null}
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push("DecadeSetup")}>
                        <Text style={styles.buttonText}>Choose Decades</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}