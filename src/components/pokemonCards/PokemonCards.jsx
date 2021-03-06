import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './pokemonCard/PokemonCard';
import { gettingAllPokemon } from '../../reducers/pokemon';

import './PokemonCards.css';

const PokemonCards = () =>  {

	const dispatch = useDispatch();
	const pokemonData = useSelector((state) => state.pokemonReducer.pokemon.results) || 0;

	useEffect(() => {
		dispatch(gettingAllPokemon());
	}, [])

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
              <PokemonCard key={pokemon.name} data={pokemon} />
            </div>
					))
				}
			</div>
	);

}

export default PokemonCards;