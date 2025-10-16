import React from 'react'
import { useState, useEffect } from 'react'

function App() {

  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/').then(res => res.json()).then(data => setUsernames(data));
  }, [])

  return (
    usernames.map((username) => {
      return <div key={username.id}>{username.username}</div>
    })
  )
}

export default App