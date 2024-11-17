import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../../interfaces/pokemon.interface';

export interface PokemonState {
    page: number;
    pokemons: Pokemon[];
    isLoading: boolean;
}

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false,

}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }


        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

// export default counterSlice.reducer