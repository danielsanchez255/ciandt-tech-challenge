import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from "./reducers/pokemon";
import favoritesPokemonReducer from "./reducers/favoritesPokemon";

import Home from "./pages/home/Home";

import "./index.css";

const reducer = combineReducers({
  pokemonReducer: pokemonReducer,
  favoritesPokemonReducer: favoritesPokemonReducer
});

const store = configureStore({ reducer: reducer, devTools: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
