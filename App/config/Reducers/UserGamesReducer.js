import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

initialState = {
    currentUserGames: [],
    currentHummer: {},
    gameWinner: []
}

export const createUserGames = createAsyncThunk("userGames/createUserGames", async (infoObj, thunkAPI) => {
    let token = await getToken()
    return fetch("http://localhost:3000/user_games", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            gameId: infoObj.gameId,
            players: infoObj.playersArray
        })
      })
        .then(res => res.json())
        .then(userGamesArray => 
          {
              return userGamesArray
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
          })
})

export const updateUserGames = createAsyncThunk("userGames/updateUserGames", async (unused, thunkAPI) => {
    let token = await getToken()
    let currentState = thunkAPI.getState()
    return fetch("http://localhost:3000/update_user_games", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            finalUserGames: currentState.userGames.currentUserGames
        })
      })
        .then(res => res.json())
        .then(message => 
          {
              console.log("message: ", message)
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


const userGamesSlice = createSlice({
    name: "userGames",
    initialState,
    reducers: {
        selectHummer(state, action){
            let newHummer = state.currentUserGames.find(userGame => userGame.user_id === action.payload)
            state.currentHummer = newHummer
        },
        addPoints(state, action){
            state.currentUserGames.forEach((userGame, index) => {
                if(userGame.user_id === action.payload){
                    state.currentUserGames[index] = {
                        ...userGame,
                        points: userGame.points + 10
                    }
                }
            })
        },
        findWinner(state, action){
            // console.log("state in findWinner: ", state)
            let maxPoints = 0
            state.currentUserGames.forEach(userGame => {
                if (userGame.points > maxPoints) {
                    maxPoints = userGame.points
                }
            }) 

            state.currentUserGames = state.currentUserGames.map(userGame => {
                if(userGame.points === maxPoints){
                    let updatedUserGame = {
                        ...userGame,
                        winner: true
                    }
                    state.gameWinner.push(updatedUserGame)
                    return updatedUserGame
                } else {
                    return userGame
                }
            })
            // let winners = state.currentUserGames.filter(userGame => userGame.points === maxPoints)
            // for(let i=0; i<winners.length; i++){
            //     winners[i] = {
            //         ...winners[i],
            //         winner:true
            //     }
            // }
            // state.gameWinner = winners
        },
        clearUserGameState(state, action){
            state.currentUserGames = []
            state.currentHummer = {}
            state.gameWinner = []
        }
        
    
        
    
        // console.log("maxPoints: ",maxPoints)
    },
    extraReducers: {
        [createUserGames.fulfilled](state, action) {
            state.currentUserGames = action.payload
            state.currentHummer = action.payload[0]
        },
        [updateUserGames.fulfilled](state, action) {
            console.log("fulfilled")
            // state.currentUserGames = action.payload
            // state.currentHummer = action.payload[0]
        }
    }
})

export const {selectHummer, addPoints, findWinner, clearUserGameState} = userGamesSlice.actions
export default userGamesSlice.reducer