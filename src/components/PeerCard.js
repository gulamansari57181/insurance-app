import React from "react";
import "../App.css";
import { Button, Card, Container, Row, Col, CardGroup } from "react-bootstrap";

function PeerCard() {
  return (
    <>
      <div className="card-container">
        <Container className="m-6">
          <Row>
            <Col md={6}>
              <Card className="text-center card">
                <Card.Body>
                  <Card.Title>Shop</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go to Shop</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-center card">
                <Card.Body>
                  <Card.Title>Insurance</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go to Insurance</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-center card">
                <Card.Body>
                  <Card.Title>Police</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go to Police</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="text-center card mb-3">
                <Card.Body>
                  <Card.Title>Repair</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go to Repair</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PeerCard;
