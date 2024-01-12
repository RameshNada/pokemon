const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        pokemon.map((item) => (
          <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
            <h2>{item.id}</h2>
            <img className="poke-img" src={item.sprites.front_default} alt="" />
            <h2>{item.name}</h2>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
