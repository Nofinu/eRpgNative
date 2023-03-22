import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../Component/Button'


export default function HomePage() {


  useEffect(()=>{

  },[])

  return (
    <View Style={styles.container}> 
      <Button title={"Characters"}/>
      <Button title={"Classes"}/>
      <Button title={"Weapons"}/>
    </View >
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  }
})