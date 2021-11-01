import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


initialState = {
    currentGame: {},
    passStyle: undefined, 
    turnStyle: undefined
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
    return fetch("http://localhost:3000/games", {
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

        }
    },
    extraReducers: {
        [createGame.fulfilled](state, action) {
            state.currentGame = action.payload
        }
    }
})

export const {savePassStyle, saveTurnStyle} = gamesSlice.actions
export default gamesSlice.reducer