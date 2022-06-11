import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './PokemonCards.css';

const PokemonCards = () =>  {

	const pokemonData = useSelector((state) => state.pokemon.results);
	console.log("Pokemon: ", pokemonData);

	return (
		!pokemonData.length ? 
			<div>
				Loading...
			</div>
		:	
			<div className="layoutPokemonCards">
				{
					pokemonData.map((pokemon) => (
						<div key={pokemon.name}>
							{pokemon.name}
						</div>
					))
				}
			</div>
	);

}

export default PokemonCards;