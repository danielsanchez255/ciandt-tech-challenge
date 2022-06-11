import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from 'react-redux';
import { filteredPokemon } from '../../reducers/pokemon';

import './FilterPokemon.css';

const FilterPokemon = () =>  {

  const inputPokemonRef = useRef('');
  const dispatch = useDispatch();
  const filterPokemon = () => {
    dispatch(filteredPokemon(inputPokemonRef.current.value));
  }

	return (
		<>
      <InputText placeholder="Search a Pokemon" ref={inputPokemonRef} className="mt-2 mb-3" onChange={filterPokemon} />
    </>
	);

}

export default FilterPokemon;