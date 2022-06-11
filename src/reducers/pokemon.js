import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingPokemon = createAsyncThunk(
  "pokemon/gettingPokemon",
  async () => {
    const res = api.fetchPokemon();

    const data = res.then((response) => {
      return response.data;
    }).catch((error) => {
      return console.log("Error: ", error);
    })  
    
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
    pokemonContainer: []
  },
  reducers: {
    filteredPokemon: (state, action) => {
      const pokemonResults = current(state.pokemonContainer.results);
      state.pokemon.results = pokemonResults.filter((pokemonItem) => pokemonItem.name.includes(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(gettingPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
      state.pokemonContainer = action.payload;
    })
  },
});

export const { filteredPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;