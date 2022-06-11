import React from 'react';

import './PokemonCard.css';

const PokemonCard = ({ data }) =>  {
	return (
		<div>
      <h2>{data.name}</h2>
    </div>
	);
}

export default PokemonCard;