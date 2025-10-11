import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function ReactNavBar({ handleResetGame }) {
    return <Navbar className='nav'>
    <Button>Home</Button>
    <Button onClick={handleResetGame}>Retry</Button>
    </Navbar>
}

export default ReactNavBar;