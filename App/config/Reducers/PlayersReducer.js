import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


initialState = {
    currentPlayers: [],
    topPlayers: []
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
              return playerObj
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})

export const getLeaderboard = createAsyncThunk("users/getLeaderboard", (userObj, thunkAPI) => {
    return fetch("http://localhost:3000/leaderboard", {
        method: "GET",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(leadersArray=> 
          {
              console.log("leadersArray: ", leadersArray)
              return leadersArray
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})

export const addPointsToUsers = createAsyncThunk("users/addPointsToUsers", (userGamesArray, thunkAPI) => {
  return fetch("http://localhost:3000/update_users", {
      method: "PATCH",
      headers: {
      //   Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        playersArray: userGamesArray
      })
    })
      .then(res => res.json())
      .then(updatedUsersArray=> 
        {
            console.log("updatedUsersArray: ", updatedUsersArray)
            return updatedUsersArray
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
            state.currentPlayers.push(action.payload)
        },
        [getLeaderboard.fulfilled](state, action) {
            state.topPlayers = action.payload
        },
        [addPointsToUsers.fulfilled](state, action) {
          console.log("updated users: ", action.payload)
            // state.topPlayers = action.payload
        }
    }
})

export const {clearPlayers} = playersSlice.actions
export default playersSlice.reducer