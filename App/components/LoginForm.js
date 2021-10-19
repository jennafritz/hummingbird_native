import React from "react";
// import {  } from "react-native-gesture-handler";
import { View,TextInput, Text, TouchableOpacity } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { loginPlayer } from "../config/Reducers/PlayersReducer";

export default function LoginForm() {

    const dispatch = useDispatch()

    const [formData,setFormData] = useState(
        {
        username:"",
        password:""
        }
        )


    function handleChange(event, key) {
        setFormData({
            ...formData,
            [key]: event.nativeEvent.text
        })
    }

    return (
        <View >
            <Text style={styles.text}>Login Form</Text>
            <TextInput style={styles.input} value={formData.username}  onChange={(event) => handleChange(event, "username")} defaultValue={"Username"} />
            <TextInput style={styles.input} value={formData.password}  onChange={(event) => handleChange(event, "password")} defaultValue={"Password"} />
            <TouchableOpacity style={styles.button} onPress={()=>dispatch(loginPlayer(formData))}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}