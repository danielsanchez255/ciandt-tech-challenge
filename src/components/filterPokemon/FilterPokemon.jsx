import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';

import './FilterPokemon.css';

const FilterPokemon = () =>  {

  //const [value1, setValue1] = useState('');
  const filterPokemon = () => {
    
  }

	return (
		<>
      <InputText className="mt-3 mb-3" onChange={filterPokemon} />
    </>
	);

}

export default FilterPokemon;