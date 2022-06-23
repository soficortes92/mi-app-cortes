import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from './Carrito';

function NavBar() {
  return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LDZ.IMPORTADOS</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Carrito />
        </Container>
      </Navbar>
  )
}

export default NavBar;