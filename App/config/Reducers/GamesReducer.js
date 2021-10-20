import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


initialState = {
    currentGame: {}
}

export const createGame = createAsyncThunk("games/createGames", (gameName, thunkAPI) => {
    return fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: gameName})
      })
        .then(res => res.json())
        .then(gameObj=> 
          {
              console.log(gameObj)
              return gameObj
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})


const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        clearPlayers(state, action){
            state.players = []
        }
    },
    extraReducers: {
        [createGame.fulfilled](state, action) {
            state.currentGame = action.payload
        }
    }
})

export const {} = gamesSlice.actions
export default gamesSlice.reducer