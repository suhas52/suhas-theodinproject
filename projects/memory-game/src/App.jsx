import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Game from './game'



function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  function test() {
    console.log(data.results);
  }

  return (
    <main className='main'>
      <Navbar>
        <Button>Home</Button>
      </Navbar>
      <Game data={data} test={test}></Game>
    </main>
  )
}

export default App
