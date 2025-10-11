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


function Game({ count=50 }) {
    
    const [sprites, setSprites] = useState([]);
    if (!localStorage.getItem('BestScore')) {
        const initialScoreCount = {
            score: 0,
            bestScore: 0,
            clicked: [],
            lost: false
        };
        localStorage.setItem('BestScore', 0);
    }
    
    const initialScoreCount = {
        score: 0,
        BestScore: localStorage.getItem("BestScore"),
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
            if (scoreCount.score > scoreCount.BestScore) {
                localStorage.setItem('BestScore', scoreCount.score);
            }
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