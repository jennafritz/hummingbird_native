import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

initialState = {
    currentSongs: [],
    songGroups: 1
}

export const getCurrentSongs = createAsyncThunk("songs/getCurrentSongs", async (infoObj, thunkAPI) => {
    let token = await getToken()
    return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/get_songs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            decades: infoObj.decades,
            numGroups: infoObj.numGroups
        })
      })
        .then(res => res.json())
        .then(songsArray => 
          {
              return songsArray
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})

const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        return value
      }
    } catch(e) {
        // tbd
    }
  }

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        clearSongGroups(state,action){
            state.songGroups = 1
        }
    },
    extraReducers: {
        [getCurrentSongs.fulfilled](state, action){
            state.songGroups = state.songGroups + 1
            state.currentSongs = action.payload
        },
    }
})

export const {clearSongGroups} = songsSlice.actions
export default songsSlice.reducer