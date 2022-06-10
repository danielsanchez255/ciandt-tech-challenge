import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { gettingPokemon } from '../../reducers/pokemon';
import './Home.css';

const Home = () =>  {
  const dispatch = useDispatch();
  //const pokemonData = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(gettingPokemon());
  }, [dispatch])

  return (
    <>
      Pokedex
    </>
  );

}

export default Home;