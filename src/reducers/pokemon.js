import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingPokemon.fulfilled, (state, action) => {
      return action.payload;
    })
  },
});

export default pokemonSlice.reducer;