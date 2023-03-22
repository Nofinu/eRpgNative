import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function WeaponDisplay(props) {

  const Weapons = useSelector(state => state.data.weapons)
  const weaponFind = Weapons.find(weapon => weapon.id === props.id)

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{weaponFind.name}</Text>
      <Text style={styles.text}>{weaponFind.damageType}</Text>
      <Text style={styles.text}>D{weaponFind.selectDice}</Text>
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