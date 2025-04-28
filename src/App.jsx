import "./game/styles.css";
import Actions from "./game/buttons/Actions";
import Pad from "./game/buttons/Pad";
import StartSelect from "./game/buttons/StartSelect";
import Screen from "./game/Screen";
import { useState, useEffect } from "react";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectedPokemones] = useState([]);
  const [playerLife, setPlayerLife] = useState(100);
  const [computerLife, setComputerLife] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [lastPlayerMove, setLastPlayerMove] = useState('');
  const [lastComputerMove, setLastComputerMove] = useState('');
  const BASE_URL = "https://pokeapi.co/api/v2";

  const getPokemones = async () => {
    const res = await fetch(`${BASE_URL}/pokemon?limit=10`);
    const data = await res.json();
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map((el) => el.json()));
    return data;
  };

  const handlePress = (dir) => {
    if (dir === 'right') {
      setHoverPokemon((prev) => Math.min(prev + 1, pokemones.length - 1));
    }
    if (dir === 'left') {
      setHoverPokemon((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleSelectPokemon = () => {
    const pokemonSelected = pokemones[hoverPokemon];
    if (!pokemonSelected) return;
    const computer = computerSelection();
    setSelectedPokemones([pokemonSelected, computer]);
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length);
    return pokemones[randomId];
  };

  const handleAttack = () => {
    if (selectedPokemones.length < 2 || gameOver) return;

    const [playerPokemon, computerPokemon] = selectedPokemones;

    const getRandomMoveName = (pokemon) => {
      const moves = pokemon.moves;
      if (moves.length === 0) return "tackle";
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      return randomMove.move.name;
    };

    const playerMove = getRandomMoveName(playerPokemon);
    const computerMove = getRandomMoveName(computerPokemon);

    setLastPlayerMove(playerMove);
    setLastComputerMove(computerMove);

    const playerAttack = Math.floor(Math.random() * 20);
    const computerAttack = Math.floor(Math.random() * 20);

    const newComputerLife = Math.max(computerLife - playerAttack, 0);
    const newPlayerLife = Math.max(playerLife - computerAttack, 0);

    setComputerLife(newComputerLife);
    setPlayerLife(newPlayerLife);
  };

  const handleRestart = () => {
    setSelectedPokemones([]);
    setPlayerLife(100);
    setComputerLife(100);
    setGameOver(false);
    setLastPlayerMove('');
    setLastComputerMove('');
  };

  useEffect(() => {
    getPokemones();
  }, []);

  useEffect(() => {
    if (!gameOver) {
      if (playerLife <= 0 || computerLife <= 0) {
        setGameOver(true);
      }
    }
  }, [playerLife, computerLife]);  

  return (
    <div className="app-container">
      <div className="game-container">
        <Screen
          pokemones={pokemones}
          hoverPokemon={hoverPokemon}
          selectedPokemones={selectedPokemones}
          playerLife={playerLife}
          computerLife={computerLife}
          gameOver={gameOver}
          lastPlayerMove={lastPlayerMove}
          lastComputerMove={lastComputerMove}
          onRestart={handleRestart}
        />
        <div className="buttons-container">
          <Pad handlePress={handlePress} />
          <StartSelect handleSelectPokemon={handleSelectPokemon} />
          <Actions handleAttack={handleAttack} />
        </div>
      </div>
    </div>
  );
}

export default App;
