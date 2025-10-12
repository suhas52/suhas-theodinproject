import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function ReactNavBar() {
    return <Navbar className='nav'>
    {/* <Button onClick={}>Home</Button> */}
    <Link className="btn btn-primary" to={"/"}>Home</Link>
    <Link className="btn btn-primary" to={"/game"}>Play</Link>
    </Navbar>
}

export default ReactNavBar;