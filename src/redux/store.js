import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './slices/pokemons';
import uiReducer from './slices/ui';

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        ui: uiReducer,
    },
});
