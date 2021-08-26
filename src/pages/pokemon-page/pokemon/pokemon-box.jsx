import React from 'react';

import './pokemon-box.css';

export const PokemonBox = ({ info, sendPokemonInfo }) => {

    function sendInfo(){
        sendPokemonInfo(info);
    }

    return (
        <div 
        className='card' 
        onClick={sendInfo}
        key={info.url + Math.random()}>
            <div className='card-img'>
                <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info?.id}.png`} alt={info.name} />
            </div>
            <div>
                <h3 className='card-name'>{info?.name}</h3>
                <div>
                    {info?.types?.map(element => <span key={info.id + Math.random()} className='card-type'>{element.type.name}</span>)}
                </div>
            </div>
        </div>
    )
}