import React,{ useState } from "react";
import Catturato from "./CaughtPokemon";
import Logo from "./logo.js";
import PokemonMovesSelector from "./MovesSelector"
import PokemonCity from "./PokemonCity"

function formatName(user) {
  return user.firstName + " " + user.lastName;
}


const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];
const abilit = ["run-away", "adaptability", "intimidate"];

const BestPokemon = (prop) => {
  console.log(prop[1])

  var pokemen = "Squirtle";
  var listat = ["firsto", "secondo", "terzo"]
  const ogget = {
    minuto: 23,
    locate: "indeed",
  };
  
  const user = {
    firstName: "Bob",
    lastName: "Marley",
  };

  return <div> 
    <ul>
      {prop.abilities.map( (broken, index) => (
        <li key = {index}> {broken} </li>
      ))}
      <p> here the second added and the best {pokemen}</p> 
    </ul>

    <p> here the {listat.join(" and ")} </p>

    <h2> here the number {ogget.minuto} {ogget.locate}</h2>

    <span>{formatName(user)}</span>
    <ul>
      {mentors.map((name, ini) => (
        <li key = {ini}> {name} </li>
      ))}
    </ul>

    

  </div>
}


const Bottonato = () => {
  let [timeo, setimeo] = useState(0);

  function incrementato(){
    setimeo(timeo + 1);
    console.log(timeo);
  }

  return (
    <div>
      <button onClick={incrementato}> clickando </button>
      <p> you clicked indeed {timeo} times</p>
    </div>
  )
}

const App = () => {

  function logWhenClicked() {
    console.log("Button was clicked!");
  }

  return <div>
      <Bottonato />
      <Catturato />
      <Logo appName="Pokedex" don={logWhenClicked}/> 
      <BestPokemon abilities ={abilit} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
}

export default App;