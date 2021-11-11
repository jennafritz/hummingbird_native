import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

initialState = {
    currentPlayers: [],
    topPlayers: []
}

export const loginPlayer = createAsyncThunk("users/loginPlayer", (userObj, thunkAPI) => {
    return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/login", {
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

export const registerPlayer = createAsyncThunk("users/registerPlayer", (userObj, thunkAPI) => {
  console.log("userObj: ", userObj)  
  return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/users", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: userObj.username,
            password: userObj.password,
            points: 0
        })
      })
        .then(res => res.json())
        .then(playerObj=> 
          {
              console.log(playerObj)
              return playerObj
          }
        )
})

export const getLeaderboard = createAsyncThunk("users/getLeaderboard", async (userObj, thunkAPI) => {
  let token = await getToken()  
  return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/leaderboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
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

export const addPointsToUsers = createAsyncThunk("users/addPointsToUsers", async (userGamesArray, thunkAPI) => {
  let token = await getToken()
  return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/update_users", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
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

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  } catch (e) {
    // saving error
  }
}

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

const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        clearPlayers(state, action){
            state.players = []
        },
        removePlayer(state, action) {
          console.log("removePlayer ", action.payload)
          state.currentPlayers = state.currentPlayers.filter(userGame => userGame.id !== action.payload)
      }
    },
    extraReducers: {
        [loginPlayer.fulfilled](state, action) {
          state.currentPlayers.push(action.payload.user)
          if(state.currentPlayers.length === 1) {
            storeData(action.payload.token)
          }
        },
        [registerPlayer.fulfilled](state, action) {
          console.log("action.payload: ", action.payload)
          state.currentPlayers.push(action.payload.user)
          if(state.currentPlayers.length === 1) {
            storeData(action.payload.token)
          }
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

export const {clearPlayers, removePlayer} = playersSlice.actions
export default playersSlice.reducer