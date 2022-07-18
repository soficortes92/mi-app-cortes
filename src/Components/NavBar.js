import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">
          <Link to={"/"}>LDZ.IMPORTADOS</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/productos"}>Productos</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Juegos"}>Juegos</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Tecnologia"}>Tecnologia</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/category/Termos"}>Termos</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to={"/contacto"}>Contacto</Link>
        </Nav>
        <Carrito />
      </Container>
    </Navbar>
  );
}

export default NavBar;
