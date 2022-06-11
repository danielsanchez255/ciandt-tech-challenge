import { createSlice, current } from "@reduxjs/toolkit";

export const favoritesPokemonSlice = createSlice({
  name: 'favoritesPokemon',
  initialState: {
    favoritesPokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      let existed_item = state.favoritesPokemon.find(item => item.name === action.payload.name);
        if (existed_item) {
            return console.log("Ya existe");
        } else {
          return {
            ...state,
            favoritesPokemon: [...state.favoritesPokemon, action.payload]
          }
        }
      
    },
    deletePokemon: (state, action) => {
      console.log("deletePokemon: ", action);
    },
    filteredFavoritesPokemon: (state, action) => {
      //const favoritesPokemonResults = current(state.favoritesPokemon.results);
      console.log("Favoritos: ", current(state.favoritesPokemon));
      /*let favoritesResults = favoritesPokemonResults.filter((pokemonItem) => pokemonItem.name.includes(action.payload.toLowerCase()));
      return {
        ...state,
        favoritesPokemon: [...state.favoritesPokemon, favoritesResults]
      }*/
    }
  },
})

export const { addPokemon, deletePokemon, filteredFavoritesPokemon } = favoritesPokemonSlice.actions;
export default favoritesPokemonSlice.reducer;