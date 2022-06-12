import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Chart } from 'primereact/chart';
import { gettingPokemon } from '../../../reducers/pokemon';

import './FavoritePokemonCard.css';

const FavoritePokemonCard = ({ data }) =>  {
  const [displayBasic, setDisplayBasic] = useState(false);
  const dispatch = useDispatch();
	const pokemonInformation = useSelector((state) => state.pokemonReducer.pokemonInformation) || [];

  let labelsArray = [];
  let dataArray = [];

  if (pokemonInformation === undefined || pokemonInformation === null || pokemonInformation.length === 0) {
    
  } else {
    pokemonInformation.stats.map((stat) => {
      labelsArray.push(stat.stat.name);
      dataArray.push(stat.base_stat);
    })
  }

  const [chartData] = useState({
    labels: labelsArray,
    datasets: [
        {
            data: dataArray,
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#48926C",
                "#A6DCE7",
                "#BB8254"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#48926C",
                "#A6DCE7",
                "#BB8254"
            ]
        }]
  });

  const [lightOptions] = useState({
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
  });

	const seeMore = (url) => {
		dispatch(gettingPokemon(url));
    setDisplayBasic(true);
	}

	return (
        <Card>
          <h5 className="p-card-title">{data.name}</h5>
          <Button className="p-button-danger button-right" label="Details" icon="pi pi-info-circle" onClick={() => seeMore(data.url)} />
          {
            pokemonInformation === undefined || pokemonInformation === null || pokemonInformation.length === 0 ? 
              <div></div>
            :
              <Dialog header={data.name} visible={displayBasic}  breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} onHide={() => setDisplayBasic(false)}>
                <div className="avatar-img">
                  <img className="pokemon-img" src={pokemonInformation.sprites.front_default} srcSet={pokemonInformation.sprites.front_default} width="200" />
                </div>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <b>Abilities:</b>
                    {
                      pokemonInformation.abilities.map((data) => (
                        <div key={data.slot}>- {data.ability.name} </div>
                      ))
                    }
                    </div>
                  <div className="col-md-3">
                    <b>Weight:</b>
                    <div>{pokemonInformation.weight}</div>
                  </div>
                  <div className="col-md-3">
                    <b>Height:</b>
                    <div>{pokemonInformation.height}</div>
                  </div>
                  <div className="col-md-3">
                    <b>Base experience:</b>
                    <div>{pokemonInformation.base_experience}</div>
                  </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                  <div className="col-md-12" style={{ contentAlign: 'center' }}>
                    <b>Stats:</b>
                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
                  </div>
                </div>
              </Dialog>
          }
        </Card>
        
	);
}

export default FavoritePokemonCard;