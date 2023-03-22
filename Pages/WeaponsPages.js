import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import WeaponDisplay from '../Component/WeaponDisplay'

export default function WeaponsPages() {
  const Weapons = useSelector(state=>state.data.weapons)
  console.log(Weapons)
  return (
      <FlatList contentContainerStyle={styles.container} data={Weapons} renderItem={(itemData)=>{
        console.log(itemData.item)
        return (<WeaponDisplay id={itemData.item.id}/>)
      }} keyExtractor={(item)=> { 
        return item.id
      }} ></FlatList>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center"
  }
})