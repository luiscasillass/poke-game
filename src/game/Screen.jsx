const Screen = ({
  pokemones,
  hoverPokemon,
  selectedPokemones,
  playerLife,
  computerLife,
  gameOver,
  lastPlayerMove,
  lastComputerMove,
  onRestart
}) => {
  const player = selectedPokemones[0];
  const user = selectedPokemones[1];

  const showBattle = player && user;

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen" style={{ position: "relative", minHeight: "300px" }}>
          {gameOver ? (
            <div style={{ textAlign: "center", marginTop: "100px", color: "black", fontWeight: "bold", fontSize: "18px" }}>
              Defeated!
              <div style={{ marginTop: "90px", fontSize: "16px" }}>
                {/* {playerLife > 0 ? "Victory!" : "Game Over - Continue?"} */}
              </div>
              <button onClick={onRestart} style={{ backgroundColor:"#4CAF50", marginTop: "170x", padding: "2px 70px", fontSize: "15px" }}>
                New Game
              </button>
            </div>
          ) : showBattle ? (
            <>
             
              <div style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                textAlign: "right"
              }}>
                <p>PC</p>
                <div style={{ backgroundColor: "#ccc", width: "100px", height: "10px", marginLeft: "auto" }}>
                  <div style={{ width: `${playerLife}%`, height: "100%", backgroundColor: "yellow" }}></div>
                </div>
                <img src={player?.sprites?.front_default} alt="player" />
                <p style={{ fontSize: "10px", color: "black" }}>
                  Usaste: <strong>{lastPlayerMove}</strong>
                </p>
              </div>

            
              <div style={{
                position: "absolute",
                bottom: "10px",
                left: "20px",
                textAlign: "left"
              }}>
                <p>User</p>
                <div style={{ backgroundColor: "#ccc", width: "100px", height: "10px" }}>
                  <div style={{ width: `${computerLife}%`, height: "100%", backgroundColor: "red" }}></div>
                </div>
                <img src={user?.sprites?.back_default} alt="computer" />
                <p style={{ fontSize: "10px", color: "black" }}>
                  : <strong>{lastComputerMove}</strong>
                </p>
              </div>
            </>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {pokemones?.map((pokemon, index) => (
                <div
                  key={pokemon.id}
                  style={{
                    backgroundColor: `${hoverPokemon === index ? 'yellow' : ''}`,
                    margin: '5px'
                  }}
                >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p style={{ fontFamily: 'Pokemon Classic', fontSize: '8px' }}>
                    {pokemon.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container-text">
          
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: '12px' }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
