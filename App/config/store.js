import { configureStore } from "@reduxjs/toolkit";
import DecadesReducer from "./Reducers/DecadesReducer";
import devToolsEnhancer from "remote-redux-devtools";

const store = configureStore({
    reducer: {
        decades: DecadesReducer
    },
    devTools: false,
    enhancers: [devToolsEnhancer({ realtime: true })]
})

export default store

