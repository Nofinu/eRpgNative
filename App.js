import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationComponent from './Component/NavigationComponent'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationComponent/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})