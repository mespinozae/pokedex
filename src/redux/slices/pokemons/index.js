import { createSlice } from '@reduxjs/toolkit';
import { getAll, getDetailById } from '../../../api/pokemon';
import { setStartLoading, setFinishLoading } from '../ui';
export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        list: [],
        selected: {},
    },
    reducers: {
        setPokemonList: (state, action) => {
            state.list = action.payload;
        },
        setPokemonSelected: (state, action) => {
            state.selected = action.payload;
        },
    },
});
export const { setPokemonList, setPokemonSelected } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const fetchPokemons = () => {
    return async (dispatch) => {
        dispatch(setStartLoading());
        const pokemonsList = await getAll();
        dispatch(setFinishLoading());

        dispatch(setPokemonList(pokemonsList));
    };
};

export const selectedPokemon = (id) => {
    return async (dispatch) => {
        dispatch(setStartLoading());
        const pokemon = await getDetailById(id);
        dispatch(setFinishLoading());
        dispatch(setPokemonSelected(pokemon));
    };
};
