import React from 'react';
import FilterPokemon from '../../components/filterPokemon/FilterPokemon';
import Navbar from '../../components/navbar/Navbar';
import PokemonCards from '../../components/pokemonCards/PokemonCards';
import './Home.css';

const Home = () =>  {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center mt-3 mb-3">
          <img src="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo_1586x.png?v=1645727603" srcSet="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo_1586x.png?v=1645727603" alt="Pokedex logo" width="160vw" />
        </div>
        <FilterPokemon />
        <PokemonCards />
      </div>
    </>
  );

}

export default Home;