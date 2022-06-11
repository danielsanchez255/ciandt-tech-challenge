import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingAllPokemon = createAsyncThunk(
  "pokemon/gettingAllPokemon",
  async () => {
    const res = api.fetchAllPokemon();

    const data = res.then((response) => {
      return response.data;
    }).catch((error) => {
      return console.log("Error: ", error);
    })  
    
    return data;
  }
);

export const gettingPokemon = createAsyncThunk(
  "pokemon/gettingPokemon",
  async (url) => {
    const pokemonUrl = url.split('https://pokeapi.co/api/v2');
    const res = api.fetchPokemon(pokemonUrl[1]);

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
    pokemonContainer: [],
    pokemonInformation: []
  },
  reducers: {
    filteredPokemon: (state, action) => {
      const pokemonResults = current(state.pokemonContainer.results);
      state.pokemon.results = pokemonResults.filter((pokemonItem) => pokemonItem.name.includes(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(gettingAllPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
      state.pokemonContainer = action.payload;
    });
    builder.addCase(gettingPokemon.fulfilled, (state, action) => {
      state.pokemonInformation = action.payload;
    });
  },
});

export const { filteredPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;