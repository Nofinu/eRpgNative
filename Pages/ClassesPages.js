import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ClassesDisplay from '../Component/ClassesDisplay'

export default function ClassesPages() {
  const Classes = useSelector(state=> state.data.classes)
  return (
    <FlatList contentContainerStyle={styles.container} data={Classes} renderItem={({item})=>{
      return <ClassesDisplay id={item.id} />
    }} keyExtractor={(item)=> item.id}/>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center"
  }
})