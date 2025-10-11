import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function GetSprites({ scoreCount, sprites, handleClick }) {
    const pokemonStyle = {
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#333333',
        fontFamily: '"Press Start 2P", cursive',
        fontSize: "1rem",
        paddingTop: "10px"
    };
    
    const cardStyle = {
        backgroundColor: "rgba(0, 255, 21, 0.9)",
    };
    
    function getRandomElements(arr, count) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return (shuffled.slice(0, count));
    };
    
    const [currentPokemonArray, setCurrentPokemonArray] = useState(getRandomElements(sprites, 10))
    
    
    useEffect(() => {
        if (sprites && sprites.length > 0) {
            setCurrentPokemonArray(getRandomElements(sprites, 10));
        }
    }, [sprites, scoreCount]);
    
    return <div className="pokemon-grid">
    {currentPokemonArray.map((pokemon) => {
        return (
            <Card style={cardStyle} key={pokemon.name} className="card">
            <h4 style={pokemonStyle}>{pokemon.name}</h4>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Button onClick={() => handleClick(pokemon.name)} id={pokemon.id}>Choose {pokemon.name}!</Button>
            </Card>
        )
    })}
    </div>
}

export default GetSprites