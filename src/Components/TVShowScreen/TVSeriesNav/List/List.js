import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();

  const homepageHnadler = () => {
    navigate("/");
  };

  const TVShowpageHnadler = () => {
    navigate("/tvshows");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav_list" variant="dark">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link onClick={homepageHnadler} href="#">
                Home
              </Nav.Link>

              <Nav.Link onClick={TVShowpageHnadler} href="#">
                TV Shows
              </Nav.Link>

              <Nav.Link href="#">Movies</Nav.Link>

              <Nav.Link href="#">New & Popular</Nav.Link>

              <Nav.Link href="#">My List</Nav.Link>

              <Nav.Link href="#">Browse by Language</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dropdown for small screens */}

      <Container className="d-lg-none">
        <NavDropdown title="Browse" id="nav-dropdown">
          <NavDropdown.Item href="#">Home</NavDropdown.Item>

          <NavDropdown.Item onClick={TVShowpageHnadler} href="#">TV Shows</NavDropdown.Item>

          <NavDropdown.Item href="#">Movies</NavDropdown.Item>

          <NavDropdown.Item href="#">New & Popular</NavDropdown.Item>

          <NavDropdown.Item href="#">My List</NavDropdown.Item>

          <NavDropdown.Item href="#">Browse by Language</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </>
  );
}

export default List;
