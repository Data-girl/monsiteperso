import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        fixed="top"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">Accueil</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/projets">
              <Nav.Link>Mes projets</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/loisirs">
              <Nav.Link>Loisirs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
