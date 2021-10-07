import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import PlayerSetupScreen from '../screens/PlayerSetupScreen'
import DecadeSetupScreen from '../screens/DecadeSetupScreen'
import GamePlayHummingScreen from '../screens/GamePlayHummingScreen'
import GamePlayGuessingScreen from '../screens/GamePlayGuessingScreen'
import GamePlayPassingScreen from '../screens/GamePlayPassingScreen'

const MainStack = createStackNavigator()

const MainStackScreen = () => (
    <MainStack.Navigator headerMode='false' >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="PlayerSetup" component={PlayerSetupScreen} />
        <MainStack.Screen name="DecadeSetup" component={DecadeSetupScreen} />
        <MainStack.Screen name="GamePlayHumming" component={GamePlayHummingScreen} />
        <MainStack.Screen name="GamePlayGuessing" component={GamePlayGuessingScreen} />
        <MainStack.Screen name="GamePlayPassing" component={GamePlayPassingScreen} />

    </MainStack.Navigator>
)

export default () => (
    <NavigationContainer >
        <MainStackScreen />
    </NavigationContainer>
)