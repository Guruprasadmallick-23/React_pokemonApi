
import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

const [pokemonName, setPokemonName] = useState("");
const [chosen,setChosen] = useState(false);
const [pokemon, setPokemon] = useState({
              name: "",
              species: "",
              img: "",
              hp: "",
              attack: "",
              defense: "",
              type: "",
});

const searchPokemon = () => {
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) =>{
           setPokemon({
                      name: pokemonName,
                      species: response.data.species.name,
                      img: response.data.sprites.front_default,
                      hp: response.data.stats[0].base_stat,
                      attack: response.data.stats[1].base_stat,
                      defense: response.data.stats[2].base_stat,
                      type: response.data.types[0].type.name,
            });

            setChosen(true);
  });
};

  return (
    <div className="App">
    <div className="HeaderSection">
    <h1>Pokemon Search </h1>
    <input onChange={(event)=>{
      setPokemonName(event.target.value);
    }}
    />
    <button onClick={searchPokemon}>Search</button>
    </div>
    <div className="display">{!chosen ? (<h1>Search a pokemon Character</h1>) : (
     <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} />
      <h3>Species: {pokemon.species}</h3>
      <h3>Hp: {pokemon.hp}</h3>
      <h3>Attack: {pokemon.attack}</h3>
      <h3>Defensr: {pokemon.defense}</h3>
      <h3>Type: {pokemon.type}</h3>
      </>
    ) }

    </div>
    </div>
  );
}

export default App;
