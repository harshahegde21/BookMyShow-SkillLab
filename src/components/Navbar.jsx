import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpg";

const BookMyShowNavbar = () => {
  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate();
  const handleSeacrh = (e) => {
    e.preventDefault(); 
    if (!searchText) {
      alert("Please Enter movie name");
    }
    else{
        navigate("/movies")
        setsearchText("");
    }
  };
  const handlesearchText = (e) => {
    setsearchText(e.target.value);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          BookMyShow-2.0
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/sports">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/offers">
              Offers
            </Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search movies/events"
              className="me-2"
              value={searchText}
              onChange={handlesearchText}
            />
            <Button variant="outline-light" onClick={handleSeacrh}>
              Search
            </Button>
          </Form>
          <Button
            as={Link}
            to="/login"
            variant="outline-light"
            className="me-2"
          >
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BookMyShowNavbar;
