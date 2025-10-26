import { counterSlice, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: { vlaue : 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }, 
        incerementByAmount: (state ,action) => {
            state.value += state.value += action.payload
        }  
    }
});

export const { 
    increment, decrement, reset, incerementByAmount 
} = counterSlice.actions;

export default counterSlice.reducer;