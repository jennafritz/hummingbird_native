import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';
import Navigation from './config/Navigation';
// import { ThunkMiddleware } from 'redux-thunk';
import {Provider} from 'react-redux'
import store from './config/store';

export default function App() {
  return (
    <Provider store={store}>
        <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
