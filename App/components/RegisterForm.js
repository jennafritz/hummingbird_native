import React, {useState} from "react";
// import {  } from "react-native-gesture-handler";
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { registerPlayer } from "../config/Reducers/PlayersReducer";

export default function RegisterForm({setRenderOption}) {
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
        <View >
            <TextInput 
                style={styles.input} 
                value={formData.username}  
                onChange={(event) => handleChange(event, "username")} placeholder={"Username"} 
            />
            <TextInput 
                style={styles.input} 
                value={formData.password}  
                onChange={(event) => handleChange(event, "password")} placeholder={"Password"} 
                secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={()=> {
                console.log("register formData: ", formData)
                // setRenderOption("addPlayer")
                dispatch(registerPlayer(formData))
            }}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}