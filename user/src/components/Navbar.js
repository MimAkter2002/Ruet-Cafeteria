import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'; // Import necessary components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="navbarDropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="search" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
