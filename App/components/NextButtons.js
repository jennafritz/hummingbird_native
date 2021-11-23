import React from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from "../constants/styles";
import { useNavigation } from '@react-navigation/native';



export default function NextButtons({forwardButtonFunction}) {

    const navigation = useNavigation()
    return(
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                <FontAwesome5 style={styles.iconStyle} name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => forwardButtonFunction()}>
                <FontAwesome5 style={styles.iconStyle} name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )

}