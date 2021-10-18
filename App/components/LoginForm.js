import React from "react";
// import {  } from "react-native-gesture-handler";
import { View, StyleSheet, TextInput, Text } from 'react-native'
import colors from "../constants/colors";
import styles from "../constants/styles";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function LoginForm() {

    const [formData,setFormData] = useState(
        {
        username:"",
        password:""
        }
        )


    function handleChange(event, key) {
        console.log(key)
        console.log(event.nativeEvent.text)
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    return (
        <View >
            <Text style={styles.text}>Login Form</Text>
            <TextInput style={styles.input} value={formData.username}  onChange={(event) => handleChange(event, "username")} defaultValue={"Username"} />
            <TextInput style={styles.input} value={formData.password}  onChange={(event) => handleChange(event, "password")}defaultValue={"Password"} />
        </View>
    )
}