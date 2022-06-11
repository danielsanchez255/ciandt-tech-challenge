import React from 'react';
import FilterPokemon from '../../components/filterPokemon/FilterPokemon';
import PokemonCards from '../../components/pokemonCards/PokemonCards';
import './Home.css';

const Home = () =>  {

  return (
    <div className="container">
      <h1 className="text-center mt-3">Pokedex</h1>
      <FilterPokemon />
      <PokemonCards />
    </div>
  );

}

export default Home;