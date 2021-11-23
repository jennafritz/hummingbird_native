import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


initialState = {
    currentGame: {},
    passStyle: undefined, 
    turnStyle: undefined,
    remainingTurns: undefined,
    pointThreshold: undefined
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

export const createGame = createAsyncThunk("games/createGames", async (gameName, thunkAPI) => {
    let token = await getToken()
    return fetch("http://hummingbird-env-1.eba-dpnz3zm2.us-east-2.elasticbeanstalk.com/games", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: gameName})
        })
        .then(res => res.json())
        .then(gameObj=> 
            {
                return gameObj
            //   if(itinerariesArray.error){
            //     return thunkAPI.rejectWithValue(itinerariesArray.error)
            //   } else {
            //     return itinerariesArray
            //   }
            })
    }
)



const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        clearPlayers(state, action){
            state.players = []
        },
        savePassStyle(state, action){
            state.passStyle = action.payload
            console.log("passStyle in state: ", state.passStyle)
        },
        saveTurnStyle(state, action){
            state.turnStyle = action.payload
            console.log("turnStyle in state: ", state.turnStyle)
        },
        saveTurnCount(state, action){
            state.remainingTurns = action.payload
            console.log("number of turns", state.remainingTurns)
        },
        decrementTurns(state, action){
            state.remainingTurns -= 1
        },
        savePointThreshold(state, action) {
            state.pointThreshold = action.payload
            console.log("maxPoints in reducer: ", state.pointThreshold)
        }
    },
    extraReducers: {
        [createGame.fulfilled](state, action) {
            state.currentGame = action.payload
        }
    }
})

export const {savePassStyle, saveTurnStyle, saveTurnCount, decrementTurns, savePointThreshold} = gamesSlice.actions
export default gamesSlice.reducer