import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MoviesPage = () => {
  const [movies] = useState([
    { name: "KGF", genre: "Action", releaseDate: "2025-04-10", rating: 4.5, price: "₹250" },
    { name: "Jaguar", genre: "Drama", releaseDate: "2025-05-15", rating: 4.2, price: "₹200" },
    { name: "Comedy Punch", genre: "Comedy", releaseDate: "2025-06-20", rating: 4.7, price: "₹300" },
    { name: "Sthree 2", genre: "Horror", releaseDate: "2025-07-05", rating: 4.3, price: "₹280" },
    { name: "Spider", genre: "Sci-Fi", releaseDate: "2025-08-12", rating: 4.8, price: "₹350" },
    { name: "Identity", genre: "Thriller", releaseDate: "2025-09-18", rating: 4.6, price: "₹320" },
    { name: "Love Mocktail", genre: "Romance", releaseDate: "2025-10-25", rating: 4.1, price: "₹220" },
    { name: "6-5=2", genre: "Adventure", releaseDate: "2025-11-30", rating: 4.9, price: "₹400" },
    { name: "Boss I", genre: "Fantasy", releaseDate: "2025-12-22", rating: 4.4, price: "₹270" },
    { name: "Bhairathi Rangagallu", genre: "Mystery", releaseDate: "2026-01-10", rating: 4.5, price: "₹290" },
  ]);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🎬 Now Showing</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-dark text-white">
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Ratings</th>
            <th>Ticket Price</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.rating} ⭐</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="primary">Book Now</Button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MoviesPage;
