import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EventsPage = () => {
  const [events] = useState([
    { name: "Music Concert", type: "Music", date: "2025-04-15", location: "Mumbai", price: "₹1200" },
    { name: "Stand-up Comedy", type: "Comedy", date: "2025-05-05", location: "Delhi", price: "₹800" },
    { name: "Tech Conference", type: "Technology", date: "2025-06-10", location: "Bangalore", price: "₹1500" },
    { name: "Food Festival", type: "Food", date: "2025-07-20", location: "Hyderabad", price: "₹500" },
    { name: "Art Exhibition", type: "Art", date: "2025-08-12", location: "Kolkata", price: "₹700" },
  ]);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-dark text-white">
          <tr>
            <th>Event Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Location</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.type}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EventsPage;
