import {getTwoDecks, pokemonData} from './pokemonData';
import Pokedex from './Pokedex';

function getScore(pokemonArr) {
    return pokemonArr.reduce((s, hp) => s+hp.base_experience,0);
}



const Pokegame = () => {
    const twoDecks = getTwoDecks(pokemonData);  
    const deck1Total = getScore(twoDecks[0]);
    const deck2Total = getScore(twoDecks[1]);

    return (
        <>
        <Pokedex key = {1} pokemon = {twoDecks[0]} isWinner = {deck1Total > deck2Total} score = {deck1Total}/>
        <Pokedex key = {2} pokemon = {twoDecks[1]} isWinner = {deck2Total > deck1Total} score = {deck2Total}/>
        </>
    )
}

export default Pokegame;
