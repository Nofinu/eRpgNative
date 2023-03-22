import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ClassesDisplay(props) {

  const Classes =useSelector(state=> state.data.classes)
  const classFound = Classes.find(c => c.id === props.id)


  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{classFound.name}</Text>
      <Text style={styles.text}>{classFound.hitDice}</Text>
      <Text style={styles.text}>{classFound.classPoint}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
    marginTop:20,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    width:250,
    padding:8,
  },
  textTitle:{
    color:"white",
    fontSize:25
  },
  text:{
    color:"white",
    fontSize:18
  }
})