import { configureStore } from "@reduxjs/toolkit";
import DecadesReducer from "./Reducers/DecadesReducer";
import SongsReducer from "./Reducers/SongsReducer";
import PlayersReducer from "./Reducers/PlayersReducer";
import GamesReducer from "./Reducers/GamesReducer";
import UserGamesReducer from "./Reducers/UserGamesReducer";
// import devToolsEnhancer from "remote-redux-devtools";

const store = configureStore({
    reducer: {
        decades: DecadesReducer,
        songs: SongsReducer,
        players: PlayersReducer,
        games: GamesReducer, 
        userGames: UserGamesReducer
    },
    // devTools: false,
    // enhancers: [devToolsEnhancer({ realtime: true })]
})

export default store

