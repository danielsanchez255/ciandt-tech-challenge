import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingPokemon = createAsyncThunk(
    "pokemon/gettingPokemon",
    async () => {
      const res = api.fetchPokemon();
      res.then((response) => {
        console.log("Pokemon: ", response.data);
        return response.data;
      }).catch((error) => {
        return console.log("Error: ", error);
      })  
    }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingPokemon.fulfilled, (state, action) => {
      console.log("Hi: ", action);
      return action.payload;
    })
  },
});

export default pokemonSlice.reducer;