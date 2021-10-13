import { createSlice } from "@reduxjs/toolkit";

initialState = {
    selectedDecades: []
}

const decadesSlice = createSlice({
    name: "decades",
    initialState,
    reducers: {
        selectDecade(state, action){
            let decade = action.payload
            if(state.selectedDecades.includes(decade)){
                state.selectedDecades = state.selectedDecades.filter(selectedDecade => selectedDecade !== decade)
            } else {
                state.selectedDecades.push(action.payload)
            }
        }
    }
})

export const {selectDecade} = decadesSlice.actions
export default decadesSlice.reducer