import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../store/AuthContext";

export default function NavBar() {
  const { authenticated } = useContext(AuthContext);
  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Daily Updates</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">My Post</Nav.Link>
            </Nav>
            {authenticated && (
              <>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Button className="ms-2" variant="outline-success">
                  Logout
                </Button>
              </>
            )}
            {!authenticated && (
              <div>
                <Link className="btn btn-primary me-4" to="/login">
                  Login
                </Link>
                <Link className="btn btn-success" to="/register">
                  Register
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
