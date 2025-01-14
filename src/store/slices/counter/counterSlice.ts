import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    count: number,
    time: number,
}

const initialState: CounterState = {
    count: 20,
    time: 20
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        reset: (state) => {
            state.count = 0
        }


    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy, reset } = counterSlice.actions;

// export default counterSlice.reducer