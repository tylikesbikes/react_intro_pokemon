import React from "react";
import PokemonCard from './PokemonCard'


const Pokedex = (props) => {
    return (
        <div className = "pokedex grid-container">
            <p className = 'pokedexHeader'>Pokedex</p>
            {props.pokemon.map(p => <PokemonCard key={p.id} pokemon = {p} />)}
            <p>{props.isWinner ? `You are the winner with a score of ${props.score}!` : ""}</p>
        </div>
    );
};

export default Pokedex;