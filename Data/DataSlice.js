import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchData } from "../Service/dataService";


export const FetchCharacters = createAsyncThunk(
  "DataSlice/FetchCharacters",
  async()=>{
    const response = await FetchData("characters")
    if(response){
      return(response)
    }
  }
)

export const FetchClasses = createAsyncThunk(
  "DataSlice/FetchClasses",
  async()=>{
    const response = await FetchData("CharaClasses")
    if(response){
      return(response)
    }
  }
)

export const FetchWeapons = createAsyncThunk(
  "DataSlice/FetchWeapons",
  async()=>{
    const response = await FetchData("weapons")
    if(response){
      return(response)
    }
  }
)

const DataSlice = createSlice({
  name:"DataSlice",
  initialState:{
    characters:[],
    classes:[],
    weapons:[]
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(FetchCharacters.fulfilled,(state,action)=>{
      state.characters=[]
      for(let key in action.payload){
        state.characters.push({id:key,...action.payload[key]})
      }
    })
    builder.addCase(FetchClasses.fulfilled,(state,action)=>{
      state.classes=[]
      for(let key in action.payload){
        state.classes.push({id:key,...action.payload[key]})
      }
    })
    builder.addCase(FetchWeapons.fulfilled,(state,action)=>{
      state.weapons=[]
      for(let key in action.payload){
        state.weapons.push({id:key,...action.payload[key]})
      }
    })
  }
})

export default DataSlice.reducer