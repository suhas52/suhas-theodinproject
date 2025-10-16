import React from 'react'
import { useState, useEffect } from 'react'
import Nameform from './components/newnameform';

function App() {

  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/').then(res => res.json()).then(data => setUsernames(data));
  }, [])

  return (
    <div className = "usernames">
      <Nameform />
    {usernames.map((username) => {
      return <div key={username.id}>{username.username}</div>
    })}
    </div>
  )
}

export default App