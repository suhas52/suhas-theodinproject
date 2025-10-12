
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game'
import ReactNavBar from './navbar';

function App() {


  return (
    <main className='main'>
      <ReactNavBar />
      <Game></Game>
    </main>
  )
}

export default App
