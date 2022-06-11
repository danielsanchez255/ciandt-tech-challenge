import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './PokemonCard.css';

const PokemonCard = ({ data }) =>  {
	return (
	  <Card title={data.name}>
      <Button label="See more" icon="pi pi-info-circle" />
    </Card>
	);
}

export default PokemonCard;