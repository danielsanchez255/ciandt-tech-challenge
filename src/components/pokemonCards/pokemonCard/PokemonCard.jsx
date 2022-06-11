import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { gettingPokemon } from '../../../reducers/pokemon';

import './PokemonCard.css';

const PokemonCard = ({ data }) =>  {
  const [displayBasic, setDisplayBasic] = useState(false);
  const dispatch = useDispatch();
	const pokemonInformation = useSelector((state) => state.pokemonReducer.pokemonInformation) || 0;
	
  console.log("Information: ", pokemonInformation);

	const seeMore = (url) => {
		dispatch(gettingPokemon(url));
    setDisplayBasic(true);
	}

	return (
	  <Card>
      <h5 className="p-card-title">{data.name}</h5>
      <Button className="p-button-danger button-right" label="Details" icon="pi pi-info-circle" onClick={() => seeMore(data.url)} />
      <Dialog header={data.name} visible={displayBasic}  breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} onHide={() => setDisplayBasic(false)}>
          <div className="avatar-img">
            <img className="pokemon-img" src={pokemonInformation.sprites.front_default} srcSet={pokemonInformation.sprites.front_default} width="200" />
          </div>
          <p>
            <b>Abilities:</b>
            {
              pokemonInformation.abilities.map((data) => (
                <div key={data.slot}> {data.ability.name} </div>
              ))
            }
            
          </p>
      </Dialog>
    </Card>
	);
}

export default PokemonCard;