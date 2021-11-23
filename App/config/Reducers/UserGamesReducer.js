import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

initialState = {
    currentUserGames: [],
    currentHummer: {},
    gameWinner: []
}

export const createUserGames = createAsyncThunk("userGames/createUserGames", async (infoObj, thunkAPI) => {
    let token = await getToken()
    return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/user_games", {
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
    return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/update_user_games", {
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
        selectHummerWinner(state, action){
            let newHummer = state.currentUserGames.find(userGame => userGame.user_id === action.payload)
            state.currentHummer = newHummer
            console.log("winner")
        },
        selectHummerNext(state, action){
            let currentIndex = state.currentUserGames.findIndex(userGame => userGame.user_id === action.payload)
            let newIndex
            if (currentIndex === state.currentUserGames.length - 1){
                newIndex = 0
            } else {
                newIndex = currentIndex + 1
            }
            state.currentHummer = state.currentUserGames[newIndex]
        },
        addPoints(state, action){
            state.currentUserGames.forEach((userGame, index) => {
                if(userGame.user_id === action.payload){
                    console.log("line 94 of addPoints")
                    state.currentUserGames[index] = {
                        ...userGame,
                        points: userGame.points + 10
                    }
                }
            })
            console.log("finished addPoints")
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

export const {selectHummerWinner, selectHummerNext, addPoints, findWinner, clearUserGameState} = userGamesSlice.actions
export default userGamesSlice.reducer