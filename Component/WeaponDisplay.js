import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function WeaponDisplay(props) {

  const Weapons = useSelector(state => state.data.weapons)
  const weaponFind = Weapons.find(weapon => weapon.id === props.id)



  const colorFinder = ()=>{
    switch(weaponFind.damageType){
      case "cold": 
        return("rgb(12, 108, 153)")
      case "fire":
        return("rgb(145, 21, 21)")
      case "lightning":
        return("rgb(155, 179, 20)")
      case "necrotic":
        return("rgb(63, 32, 63)")
      case "acid":
        return("rgb(19, 155, 19)")
      case "poison":
        return("rgb(35, 66, 35)")
      case "psychic":
        return("rgb(161, 31, 70)")
      case "force":
        return("rgb(117, 41, 117)")
      case "radiant":
        return("rgb(196, 196, 133)")
      default:
        return ("rgb(121, 94, 94)")
    }
  }

  const color = colorFinder()

  return (
    <View style={[styles.container,{borderColor:color,borderWidth:3}]}>
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