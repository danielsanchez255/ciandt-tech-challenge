import axios from "axios";

const API = axios.create({ 
    baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto',
    headers: {
        "Content-type": "application/json"
    } 
});

export const fetchPokemon = () => API.get().catch((error) => console.log("Error: ", error));

