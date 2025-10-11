import { useEffect, useState } from 'react'
import ReactNavBar from './navbar'
import ShowModal from './modal'

import './App.css'
import GetSprites from './sprites';

function getPokemonSprites(index) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then(response => response.json())
    .then(data => data)
}


function Game({ count=100 }) {
    
    const [sprites, setSprites] = useState([]);
    const initialScoreCount = {
        score: 0,
        BestScore: 0,
        clicked: [],
        lost: false
    }

    
    const [scoreCount, setScoreCount] = useState(initialScoreCount);
    
    function handleResetGame() {
        console.log("test1")
        setScoreCount(initialScoreCount)
    }

    useEffect(() => {
        async function loadAllSprites() {
            const promises = [];
            
            for (let i = 1; i <= count; i++) {
                promises.push(getPokemonSprites(i))
            }
            
            const results = await Promise.all(promises);
            
            setSprites(results);
        }
        
        loadAllSprites();
    }, [count]);

    function handleClick(name) {
        if (scoreCount.clicked.includes(name)) {
            setScoreCount(prev => ({
                ...prev,
                lost: true,
            }))
        }
        else {
            setScoreCount(prev => ({
            ...prev,
            score: prev.score + 1,
            clicked: [...prev.clicked, name]
        }))
        }
        
    }
    
    return <>
    <ReactNavBar handleResetGame={handleResetGame}/>
    <div className='score-container'>
        <p>Score: {scoreCount.score}</p>
        <p>Your Best: {scoreCount.BestScore}</p>
    </div>
    <ShowModal scoreCount={scoreCount} handleResetGame={handleResetGame}/>
    <GetSprites scoreCount={scoreCount} sprites={sprites} handleClick={handleClick}/>
    </>
}

export default Game;