import React from "react";

import "../App.css";
import { Navbar, Nav, Container, AccordionButton } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Insurance from "./Insurance";
import Police from "./Police";
import Repair from "./Repair";
import Shop from "./Shop";

function Navb() {
  return (
    <BrowserRouter>
      <>
        {/* Navbar */}

        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav.Link as={Link} to="/App">
              <Navbar.Brand> Insurance-App </Navbar.Brand>
            </Nav.Link>

            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/insurance">
                Insurance
              </Nav.Link>
              <Nav.Link as={Link} to="/police">
                Police
              </Nav.Link>
              <Nav.Link as={Link} to="/repair">
                Repair
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Adding routes */}
        <div>
          <Routes>
            <Route path="/insurance" element={<Insurance />}></Route>
            <Route path="/police" element={<Police />}></Route>
            <Route path="/repair" element={<Repair />}></Route>
            <Route path="/" element={<Shop />}></Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default Navb;
