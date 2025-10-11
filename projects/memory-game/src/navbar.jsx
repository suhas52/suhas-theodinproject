import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

//home button currently not routed so it's set to reload
function ReactNavBar({ handleResetGame }) {
    return <Navbar className='nav'>
    <Button onClick={() => window.location.reload()}>Home</Button>
    <Button onClick={handleResetGame}>Retry</Button>
    </Navbar>
}

export default ReactNavBar;