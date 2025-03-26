import React from "react";
import { Container, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bmg from "../assets/bmg.jpg";
import bm2 from "../assets/bm2.jpg";
import bm3 from "../assets/bm3.jpg";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Welcome to BookMyShow-2.0</h1>
      <p className="text-center">Find the best movies, events, and more!</p>
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bmg} alt="Featured Movie 1" />
          <Carousel.Caption>
            <h3>Featured Movie 1</h3>
            <p>Experience the thrill and adventure.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bm2} alt="Featured Event 1"  />
          <Carousel.Caption>
            <h3>Featured Event 1</h3>
            <p>Join us for an unforgettable event.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bm3} alt="Featured Movie 2" />
          <Carousel.Caption>
            <h3>Featured Movie 2</h3>
            <p>A breathtaking cinematic experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomePage;
