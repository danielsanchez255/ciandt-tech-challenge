import React from 'react';
import FavoritesPokemonCards from '../../components/favoritesPokemonCards/FavoritesPokemonCards';
import FilterFavoritesPokemon from '../../components/filterFavoritesPokemon/FilterFavoritesPokemon';
import Navbar from '../../components/navbar/Navbar';
import './Favorites.css';

const Home = () =>  {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center mt-3 mb-3">
          <img src="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo_1586x.png?v=1645727603" srcSet="https://cdn.shopify.com/s/files/1/0555/7708/3985/files/Pokedex_Logo_1586x.png?v=1645727603" alt="Pokedex logo" width="160vw" />
        </div>
        <div className="center">
          <h3 className="title-page">Favorites</h3>
        </div>
        <FilterFavoritesPokemon />
        <FavoritesPokemonCards />
      </div>
    </>
  );

}

export default Home;