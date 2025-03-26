import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SportsPage = () => {
  const [sports] = useState([
    { name: "Rocky", genre: "Boxing/Drama", releaseDate: "1976-11-21", rating: 8.1, price: "₹250" },
    { name: "Creed", genre: "Boxing/Drama", releaseDate: "2015-11-25", rating: 7.6, price: "₹280" },
    { name: "Remember the Titans", genre: "Football/Drama", releaseDate: "2000-09-29", rating: 7.8, price: "₹220" },
    { name: "Moneyball", genre: "Baseball/Biography", releaseDate: "2011-09-23", rating: 7.6, price: "₹300" },
    { name: "Ford v Ferrari", genre: "Racing/Drama", releaseDate: "2019-11-15", rating: 8.1, price: "₹350" },
    { name: "The Blind Side", genre: "Football/Drama", releaseDate: "2009-11-20", rating: 7.6, price: "₹270" },
    { name: "Rush", genre: "Formula 1/Drama", releaseDate: "2013-09-27", rating: 8.1, price: "₹400" },
    { name: "Coach Carter", genre: "Basketball/Drama", releaseDate: "2005-01-14", rating: 7.3, price: "₹230" },
    { name: "Warrior", genre: "MMA/Drama", releaseDate: "2011-09-09", rating: 8.2, price: "₹310" },
    { name: "The Fighter", genre: "Boxing/Drama", releaseDate: "2010-12-17", rating: 7.8, price: "₹260" },
    { name: "42", genre: "Baseball/Biography", releaseDate: "2013-04-12", rating: 7.5, price: "₹240" },
    { name: "Invictus", genre: "Rugby/Drama", releaseDate: "2009-12-11", rating: 7.3, price: "₹280" }
  ]);

  
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Upcoming Sports Events</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-dark text-white">
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {sports.map((sport, index) => (
            <tr key={index}>
              <td>{sport.name}</td>
              <td>{sport.date}</td>
              <td>{sport.location}</td>
              <td>{sport.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SportsPage;
