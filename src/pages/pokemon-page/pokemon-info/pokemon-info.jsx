import React, {useEffect} from 'react';

import './pokemon-info.css'

export const PokemonInfo = ({pokemon, ifShowInfo}) => {

    useEffect(()=> {
        console.log(pokemon);
        console.log(ifShowInfo);
    }, [pokemon, ifShowInfo]);

    return (
        <div 
        style={{display: ifShowInfo ? 'block' : 'none'}} className='info-card'>
            <div className='card-img'>
                <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`} alt={pokemon.name} />
            </div>
            <div>
                <h3 className='card-name'>{pokemon.name}</h3>
                    <div className='flex'>
                        <div className='name-characteristic'>Type</div>
                        <div className='characteristic'>
                            {pokemon?.types?.map(element => <span key={pokemon.id + Math.random()} className='card-type'>{element.type.name}</span>)}
                        </div>
                    </div>
                    {pokemon?.stats?.map(el => 
                        <div 
                        className='flex'
                        key={el.stat.name}>
                        <div className='name-characteristic'>{el.stat.name.charAt(0).toUpperCase() + el.stat.name.slice(1)}</div>
                        <div className='characteristic'>
                            <span>{el.base_stat}</span>
                        </div>
                    </div>
                    )}
                    <div className='flex'>
                        <div className='name-characteristic'>Total moves</div>
                        <div className='characteristic'>
                            <span>{pokemon?.moves?.length}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}