import React from 'react';

const PokemonCard = ({pokemon}) => {
    
    return (
        <div className = "pokemonCard grid-item" key={pokemon.id}>
            <h3>
                {pokemon.name}
            </h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
            <h5>
                Type: {pokemon.type}
            </h5>
            <h5>
                EXP: {pokemon.base_experience}
            </h5>
        </div>

    )
}

export default PokemonCard;