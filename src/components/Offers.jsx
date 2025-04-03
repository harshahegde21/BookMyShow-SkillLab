import React from "react";
import { Container, Table, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OffersPage = () => {
  const offers = [
    { name: "Rana Vikrama", discount: "20%", limited: true },
    { name: "Ghost", discount: "15%", limited: false },
    { name: "Max", discount: "15%", limited: false },
    { name: "Vikram", discount: "30%", limited: true },
    { name: "Annabond", discount: "10%", limited: false },
    { name: "Don", discount: "25%", limited: true },
    { name: "Baby Jhon", discount: "18%", limited: false },
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🔥 Exclusive Movie Offers 🔥</h2>
      <p className="text-center text-danger">Grab the best deals before they expire!</p>

      <Table striped bordered hover responsive>
        <thead className="bg-dark text-white">
          <tr>
            <th>Movie Name</th>
            <th>Discount</th>
            <th>Offer</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={index}>
              <td>{offer.name}</td>
              <td>{offer.discount}</td>
              <td>
                {offer.limited ? (
                  <Badge bg="danger">Limited Time Offer!</Badge>
                ) : (
                  <Badge bg="success">Ongoing Offer</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OffersPage;
