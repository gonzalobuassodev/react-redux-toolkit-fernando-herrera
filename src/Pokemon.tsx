import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";
import { RootState } from "./store";

export const Pokemon = () => {

      
    const { pokemons, page, isLoading } = useSelector((state: RootState) => state.pokemons)
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( getPokemons(0) )

    
    }, [])
    


  return (
    <>
        <h1>Pokemon</h1>
        <hr />

        Loading: { isLoading ? 'true' : 'false' }

        <ul>

            <button
                onClick={() => dispatch(getPokemons(page))}
            >
                Next 10
            </button>

            {
                pokemons.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))
            }



        </ul>
    </>
  )
}
