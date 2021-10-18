import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


initialState = {
    currentPlayers: []
}

export const loginPlayer = createAsyncThunk("users/loginPlayer", (userObj, thunkAPI) => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: userObj.username,
            password: userObj.password
        })
      })
        .then(res => res.json())
        .then(playerObj=> 
          {
              console.log(playerObj)
              return playerObj
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})


const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        clearPlayers(state, action){
            state.players = []
        }
    },
    extraReducers: {
        [loginPlayer.fulfilled](state, action) {
            state.currentPlayer.push(action.payload)
        }
    }
})

export const {clearPlayers} = playersSlice.actions
export default playersSlice.reducer