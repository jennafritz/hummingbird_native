import { configureStore } from "@reduxjs/toolkit";
import DecadesReducer from "./Reducers/DecadesReducer";

const store = configureStore({
    reducer: {
        decades: DecadesReducer
    }
})

export default store

