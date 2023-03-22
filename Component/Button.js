import { StyleSheet, Text,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Button (props) {

  const navigation = useNavigation()

  const onPressHandler=()=>{
    console.log(props.title)
    navigation.navigate(props.title)
  }

  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:35,
    borderRadius:15,
    height:200,
    width:"80%",
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    color:"white",
    fontSize:35,
  }
})