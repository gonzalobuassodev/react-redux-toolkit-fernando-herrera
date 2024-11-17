import { pokemonApi } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {

    return async (dispatch: any, getState: any) => {

        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`)

        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));


    }

}
