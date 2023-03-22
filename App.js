import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationComponent from './Component/NavigationComponent'
import { Provider } from 'react-redux'
import { Store } from './Service/Store'

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NavigationComponent/>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})