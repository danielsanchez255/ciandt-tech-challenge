import React from 'react';
import { useSelector } from 'react-redux';
import FavoritePokemonCard from './favoritePokemonCard/FavoritePokemonCard';

import './FavoritesPokemonCards.css';

const FavoritesPokemonCards = () =>  {

	const pokemonData = useSelector((state) => state.favoritesPokemonReducer.favoritesPokemon) || 0;

  //console.log("Favoritos: ", pokemonData);

	return (
		pokemonData === 0 || pokemonData === undefined ? 
			<div>
				Loading...
			</div>
		:	
			<div className="row">
				{
					pokemonData.map((pokemon) => (
            <div className="col-md-4 mb-3">
              <FavoritePokemonCard key={pokemon.name} data={pokemon} />
            </div>
					))
				}
			</div>
	);

}

export default FavoritesPokemonCards;