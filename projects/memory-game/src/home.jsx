function Home() {
    return <div>
        <h1>Pokemon Memory Game</h1>
        <div className="welcomecard">
        <h3>Welcome!</h3>
        <h5>Rules of the game:</h5>
        <ul>
            <li>You're given 10 pokemon cards on the screen at a time.</li>
            <li>You're supposed to pick one.</li>
            <li>If your pick was new, as in it hasn't been clicked before, then you get a point.</li>
            <li>If not you lose!</li>
        </ul>
        </div>
    </div>
}

export default Home;