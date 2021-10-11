import { createSlice } from "@reduxjs/toolkit";

initialState = {
    selectedDecades: []
}

const decadesSlice = createSlice({
    name: "decades",
    initialState,
    reducers: {
        selectDecade(state, action){
            console.log(action.payload)
            state.selectedDecades.push(action.payload)
        }
    }
})

export const {selectDecade} = decadesSlice.actions
export default decadesSlice.reducer