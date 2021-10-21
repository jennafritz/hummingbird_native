import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

initialState = {
    currentSongs: [],
    songGroups: 1
}

export const getCurrentSongs = createAsyncThunk("songs/getCurrentSongs", (infoObj, thunkAPI) => {
    // console.log("infoObj ",infoObj)
    return fetch("http://localhost:3000/get_songs", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
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