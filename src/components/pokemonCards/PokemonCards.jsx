import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './pokemonCard/PokemonCard';

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
						<PokemonCard key={pokemon.name} data={pokemon} />
					))
				}
			</div>
	);

}

export default PokemonCards;