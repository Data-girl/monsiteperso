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
          <Navbar>
            <Container>
              <Navbar.Brand href="">
                <img
                  alt=""
                  src="logo_small.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar.Brand href="/"> Accueil</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
