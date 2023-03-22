import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../Pages/HomePage'
import WeaponsPages from '../Pages/WeaponsPages'
import CharactersPages from '../Pages/CharactersPages'
import ClassesPages from '../Pages/ClassesPages'

export default function NavigationComponent() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomePage}/>
      <Stack.Screen name='Weapons' component={WeaponsPages}/>
      <Stack.Screen name='Characters' component={CharactersPages}/>
      <Stack.Screen name='Classes' component={ClassesPages}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})