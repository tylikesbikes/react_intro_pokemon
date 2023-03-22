import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import './pokedex.css';
import pokemonData from './pokemonData.js';

function App() {
  return (
    <>
      <Pokedex pokemon = {pokemonData}/>
    </>
  );
}

export default App;
