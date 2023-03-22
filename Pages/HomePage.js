import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../Component/Button'
import { useDispatch } from 'react-redux'
import { FetchCharacters, FetchClasses, FetchWeapons } from '../Data/DataSlice'


export default function HomePage() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(FetchCharacters())
    dispatch(FetchClasses())
    dispatch(FetchWeapons())
  },[])

  return (
    <View style={styles.container}> 
      <Button title={"Characters"}/>
      <Button title={"Classes"}/>
      <Button title={"Weapons"}/>
    </View >
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center"
  }
})