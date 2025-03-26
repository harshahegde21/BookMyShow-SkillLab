import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookMyShowNavbar from "./components/Navbar.jsx";
import HomePage from "./components/Home.jsx";
import MoviesPage from "./components/Movies.jsx";
import EventsPage from "./components/Events.jsx";
import SportsPage from "./components/Sports.jsx";
import Login from "./components/Login.jsx"; 
import OffersPage from "./components/Offers.jsx";

const App = () => {
  return (
    <Router>
      <BookMyShowNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
