//import { MovieData } from "../interfaces/interfaces";

import { Row, Col, Image, Card } from "react-bootstrap";

export const CardMovie = () => {
  return (
    <Row>
      <Col md={12}>
        <Card className="border-0 rounded-1 bg-warning overflow-hidden">
          <Card.Img variant="top" src="../src/public/poster3.jpg" />
          <Card.Body className="bg-dark text-light">
            <Card.Title>Jurassic Park 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
