import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StyleSheet } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import PlayerSetupScreen from '../screens/PlayerSetupScreen'
import colors from '../constants/colors'

const MainStack = createStackNavigator()

const MainStackScreen = () => (
    <MainStack.Navigator headerMode='false' >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="PlayerSetup" component={PlayerSetupScreen}/>
    </MainStack.Navigator>
)

export default () => (
    <NavigationContainer >
        <MainStackScreen />
    </NavigationContainer>
)