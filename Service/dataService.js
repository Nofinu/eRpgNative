import axios from "axios"
import { UrlBase } from "./FirebaseAcces"

export const FetchData = async (data)=>{
  const response =  await axios.get(UrlBase+data+".json")
  if (response.data !== null){
    return(response.data)
  }
  return undefined
}