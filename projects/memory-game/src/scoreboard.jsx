function ScoreBoard( {score, bestScore} ) {
    return <div className='score-container'>
    <p>Score: {score}</p>
    <p>Your Best: {bestScore}</p>
    </div>
}

export default ScoreBoard;