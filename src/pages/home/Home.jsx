import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCards from '../../components/pokemonCards/PokemonCards';
import { gettingPokemon } from '../../reducers/pokemon';
import './Home.css';

const Home = () =>  {

  const dispatch = useDispatch();
	
  useEffect(() => {
		dispatch(gettingPokemon());
	}, [dispatch])

  return (
    <>
      <h1>Pokedex</h1>
      <PokemonCards />
    </>
  );

}

export default Home;