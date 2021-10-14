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
              console.log(songsArray)
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
        // selectDecade(state, action){
        //     let decade = action.payload
        //     if(state.selectedDecades.includes(decade)){
        //         state.selectedDecades = state.selectedDecades.filter(selectedDecade => selectedDecade !== decade)
        //     } else {
        //         state.selectedDecades.push(action.payload)
        //     }
        // }
    },
    extraReducers: {
        [getCurrentSongs.fulfilled](state, action){
            state.songGroups = state.songGroups++
            state.currentSongs = action.payload
        },
    }
})

// export const {selectDecade} = decadesSlice.actions
export default songsSlice.reducer