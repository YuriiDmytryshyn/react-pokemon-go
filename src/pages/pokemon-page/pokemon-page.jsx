import React, { useEffect, useState } from 'react';

import { makeRequest } from '../../helpers/fetch';
import { PokemonBox } from './pokemon/pokemon-box';
import { PokemonInfo } from './pokemon-info/pokemon-info';

import './pokemon-page.css';

export const PokemonPage = () => {

    const [arrayOfPokemons, setArrayOfPokemons] = useState([]);
    const [pokemonLimit, setPokemonLimit] = useState(12);
    const [pokemon, setPokemon] = useState({});
    const [ifShowInfo, setIfShowInfo] = useState(false);

    useEffect(()=>{

        function getPokemons() {

            setIfShowInfo(false);
            const url =`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}`;

            makeRequest(url)
            .then(pokemons => getInfo(pokemons.results))
            .catch(err => console.log(err))

        }

        async function getInfo(pokemonList) {
            let array = []
            const results = await Promise.all(pokemonList.map((el) => makeRequest(el.url).then((res) => array.push(Object.assign(el, res)))));
            setArrayOfPokemons(array)
        }

        getPokemons();

    }, [pokemonLimit]);

    function getPokemonInfo(pokemonInfo) {
        setPokemon(pokemonInfo);
        setIfShowInfo(true);
    }
    
    return (
        <div className='box'>
            <main className='box-list'>
            {arrayOfPokemons.length && arrayOfPokemons.map(pokemon => (
                <PokemonBox 
                key={pokemon.url}
                info={pokemon}
                sendPokemonInfo={getPokemonInfo}/>))}
            <div className='box-more'>
                <button className='box-more__button' onClick={()=> setPokemonLimit(pokemonLimit + 12)}>Get more</button>
            </div>
            </main>
            <div className='box-information'>
                <PokemonInfo pokemon={pokemon} ifShowInfo={ifShowInfo}/>
            </div>
        </div>
    )
}