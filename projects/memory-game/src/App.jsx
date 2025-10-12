
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game'
import ReactNavBar from './navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './home'

function App() {


  return (
    <main className='main'>
    <ReactNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </main>
    // <main className='main'>
    //   
    //   <Game />
    // </main>
  )
}

export default App
