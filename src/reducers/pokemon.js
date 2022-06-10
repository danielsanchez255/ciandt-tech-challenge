import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api';

export const gettingPokemon = createAsyncThunk(
    "pokemon/gettingPokemon",
    async () => {
        const res = api.fetchPokemon();
        return res.data;
    }
);

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: [],
    extraReducers: {
      [gettingPokemon.fulfilled]: (state, action) => {
        console.log("Hi: ", action.payload);
        return [...action.payload];
      }
    },
});
const { pokemonReducer } = pokemonSlice;
export default pokemonReducer;