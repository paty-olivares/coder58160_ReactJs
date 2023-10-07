import CardWidget from "../CardWidget/CardWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './assets/logo_croqueteando.png'
const NavBar = () => {
    return(
        <div className="centerNavBar">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#index"><img className="logoShop" src={logo} alt="cart-logo"/></Navbar.Brand> 
          <Navbar.Brand href="#index">Croqueteando</Navbar.Brand>       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
             <Button variant="outline-light">Alimento Perros</Button>{' '}
             <Button variant="outline-light">Alimento Gatos</Button>{' '}
             <Button variant="outline-light">Accesorios</Button>{' '}
             <Button variant="outline-light">Suplementos</Button>{' '}
             <Button variant="outline-light">Farmacia Veterinaria</Button>{' '}
             <Nav.Link href="#link">
                <CardWidget/>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      )
    }
    
    export default NavBar
    