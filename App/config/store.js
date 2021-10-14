import { configureStore } from "@reduxjs/toolkit";
import DecadesReducer from "./Reducers/DecadesReducer";
import SongsReducer from "./Reducers/SongsReducer";
// import devToolsEnhancer from "remote-redux-devtools";

const store = configureStore({
    reducer: {
        decades: DecadesReducer,
        songs: SongsReducer
    },
    // devTools: false,
    // enhancers: [devToolsEnhancer({ realtime: true })]
})

export default store

