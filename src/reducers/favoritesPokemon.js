import { createSlice } from "@reduxjs/toolkit";

export const favoritesPokemonSlice = createSlice({
  name: 'favoritesPokemon',
  initialState: {
    favoritesPokemon: []
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
    }
  },
})

export const { addPokemon, deletePokemon } = favoritesPokemonSlice.actions;
export default favoritesPokemonSlice.reducer;