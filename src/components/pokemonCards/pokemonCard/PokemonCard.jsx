import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { gettingPokemon } from '../../../reducers/pokemon';
import { addPokemon } from '../../../reducers/favoritesPokemon';

import './PokemonCard.css';

const PokemonCard = ({ data }) =>  {
  const [displayBasic, setDisplayBasic] = useState(false);
  const dispatch = useDispatch();
	const pokemonInformation = useSelector((state) => state.pokemonReducer.pokemonInformation) || [];
	const toast = useRef(null);

  console.log("Information: ", pokemonInformation);

	const seeMore = (url) => {
		dispatch(gettingPokemon(url));
    setDisplayBasic(true);
	}

  const addFavorite = (data) => {
    dispatch(addPokemon(data));
		toast.current.show({severity:'success', summary: 'Favorite Pokemon added', detail:'Check your favorites page', life: 3000});
	}

	return (
        <Card>
          <h5 className="p-card-title">{data.name}</h5>
          <Button className="p-button-danger button-right" label="Details" icon="pi pi-info-circle" onClick={() => seeMore(data.url)} />
          <Button className="p-button-info button-right" label="Favorite" icon="pi pi-star"  onClick={() => addFavorite(data)}/>
          {
            pokemonInformation === undefined || pokemonInformation === null || pokemonInformation.length === 0 ? 
              <div></div>
            :
              <Dialog header={data.name} visible={displayBasic}  breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} onHide={() => setDisplayBasic(false)}>
                <div className="avatar-img">
                  <img className="pokemon-img" src={pokemonInformation.sprites.front_default} srcSet={pokemonInformation.sprites.front_default} width="200" />
                </div>
                <div>
                  <b>Abilities:</b>
                  {
                    pokemonInformation.abilities.map((data) => (
                      <div key={data.slot}> {data.ability.name} </div>
                    ))
                  }
                  <b>Weight:</b>
                  <div>{pokemonInformation.weight}</div>
                  <b>Height:</b>
                  <div>{pokemonInformation.height}</div>
                  <b>Base experience:</b>
                  <div>{pokemonInformation.base_experience}</div>
                </div>
              </Dialog>
          }
          <Toast ref={toast} position="bottom-right" />
        </Card>
        
	);
}

export default PokemonCard;