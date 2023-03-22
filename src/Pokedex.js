import React from "react";
import PokemonCard from './PokemonCard'


const Pokedex = ({pokemon}) => {
    return (
        <div className = "pokedex grid-container">
            <p className = 'pokedexHeader'>Pokedex</p>
            {pokemon.map(p => <PokemonCard key={p.id} pokemon = {p} />)}
        </div>
    );
};

export default Pokedex;