import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} style={{ background: '#c8c49c' }} className="mb-1">
          <Container fluid>
            <Navbar.Brand href="/">ZEET HUB Education</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ZEET HUB Education
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
                  <NavDropdown
                    title="Sign Up"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/student-sign-up"> Student </NavDropdown.Item>
                    <NavDropdown.Item href="/content-creator-sign-up"> Content Creator </NavDropdown.Item>
                    <NavDropdown.Item href="/content-moderator-sign-up"> Content Moderator </NavDropdown.Item>
                    <NavDropdown.Item href="/school-sign-up"> School </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;