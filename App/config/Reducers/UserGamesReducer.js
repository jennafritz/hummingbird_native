import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useSelector} from 'react-redux'

initialState = {
    currentUserGames: [],
    currentHummer: {}
}



export const createUserGames = createAsyncThunk("userGames/createUserGames", (infoObj, thunkAPI) => {
    return fetch("http://localhost:3000/user_games", {
        method: "POST",
        headers: {
        //   Authorization: `Bearer ${localStorage.token}`,
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


const userGamesSlice = createSlice({
    name: "userGames",
    initialState,
    reducers: {
        selectHummer(state, action){
            console.log(action.payload)
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
            console.log(state.currentUserGames)
            // let newHummerIndex = state.currentUserGames.findIndex(userGame => userGame.user_id === action.payload)
            // state.currentUserGames = state.currentUserGames.splice(newHummerIndex, 1, action.payload)
            // console.log(action.payload)
        }
    },
    extraReducers: {
        [createUserGames.fulfilled](state, action) {
            let userGamesWithPoints = action.payload.map(userGame => {
                return userGame = {
                    ...userGame,
                    points: 0
                }
            })
            console.log("userGamesWithPoints: ", userGamesWithPoints)
            state.currentUserGames = userGamesWithPoints
            state.currentHummer = userGamesWithPoints[0]
        }
    }
})

export const {selectHummer, addPoints} = userGamesSlice.actions
export default userGamesSlice.reducer