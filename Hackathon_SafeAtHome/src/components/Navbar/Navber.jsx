import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarUser = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="custom-navbar sticky-top">
            <Container className="container" fluid>
                <Navbar.Brand href="/homeuser" className='nav-title'>
                    <img className='navbar-logo' src='./images/logo.png' alt='logo_navbar'/> 
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="nav me-auto">
                        <Nav.Link as={NavLink} to="/home">בית</Nav.Link>
                        <Nav.Link as={NavLink} to="/insights">תובנות</Nav.Link>
                        <Nav.Link as={NavLink} to="/">התנתקות</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarUser