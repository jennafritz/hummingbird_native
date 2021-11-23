import React from "react";
// import {  } from "react-native-gesture-handler";
import { View,TextInput, Text, TouchableOpacity } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { loginPlayer, registerPlayer } from "../config/Reducers/PlayersReducer";

const formButtonStyle = {
    ...styles.button,
    width: 125,
    margin: 10,
    backgroundColor: colors.lightPurple
}

export default function LoginForm({setRenderOption, setShowForm}) {

    const dispatch = useDispatch()

    const [formData,setFormData] = useState({
        username:"",
        password:""
    })

    function handleChange(event, key) {
        setFormData({
            ...formData,
            [key]: event.nativeEvent.text
        })
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView} >
                <TextInput style={styles.input} value={formData.username}  onChange={(event) => handleChange(event, "username")} placeholder={"Username"} />
                <TextInput style={styles.input} value={formData.password}  onChange={(event) => handleChange(event, "password")} placeholder={"Password"} secureTextEntry={true} />
                {/* <TouchableOpacity style={styles.button} onPress={()=> {
                    console.log("login onPress")
                    dispatch(loginPlayer(formData))
                    setRenderOption("addPlayer")
                    setShowForm(false)
                }}> */}
                    {/* <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> */}
                <View style={styles.loginOrRegister}>
                            
                            <TouchableOpacity style = {formButtonStyle} onPress={() =>  {
                                setShowForm(true)
                                // setRenderOption("login")
                                dispatch(loginPlayer(formData))
                                //.then(response => response.error)
                                setRenderOption("addPlayer")
                                setShowForm(false)
                                }}>
                                <Text style = {styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {formButtonStyle} onPress={() => {
                                setRenderOption("addPlayer")
                                dispatch(registerPlayer(formData))
                                setShowForm(false)
                            }}>
                                <Text style = {styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                        </View>
            </View>
        </View>
    )
}