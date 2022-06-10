import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingPokemon = createAsyncThunk(
    "pokemon/gettingPokemon",
    async () => {
      //const res = api.fetchPokemon();
      const res = {
        data: 0
      }
      return res.data;
    }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingPokemon.fulfilled, (state, action) => {
      console.log("Hi: ", action.payload);
      return action.payload;
    })
  },
});

export default pokemonSlice.reducer;