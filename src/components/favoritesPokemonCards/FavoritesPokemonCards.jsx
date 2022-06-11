import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritePokemonCard from './favoritePokemonCard/FavoritePokemonCard';

import './FavoritesPokemonCards.css';

const FavoritesPokemonCards = () =>  {

	const dispatch = useDispatch();
	const pokemonData = useSelector((state) => state.favoritesPokemonReducer.favoritesPokemon) || 0;

  console.log("Favoritos: ", pokemonData);

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