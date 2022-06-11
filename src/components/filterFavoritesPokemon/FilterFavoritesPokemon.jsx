import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from 'react-redux';
import { filteredFavoritesPokemon } from '../../reducers/favoritesPokemon';

import './FilterFavoritesPokemon.css';

const FilterFavoritesPokemon = () =>  {

  const inputPokemonRef = useRef('');
  const dispatch = useDispatch();
  const filterFavoritePokemon = () => {
    dispatch(filteredFavoritesPokemon(inputPokemonRef.current.value));
  }

	return (
		<>
      <InputText placeholder="Search your favorite Pokemon" ref={inputPokemonRef} className="mt-2 mb-3" onChange={filterFavoritePokemon} />
    </>
	);

}

export default FilterFavoritesPokemon;