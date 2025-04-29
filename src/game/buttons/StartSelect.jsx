const StartSelect = ({handleSelectPokemon}) => {
  return (
    <div className="start-select-wrapper">
      <button className="gb-btn" onClick={handleSelectPokemon}>SELECT</button>
      <button className="gb-btn">START</button>
    </div>
  );
};

export default StartSelect;