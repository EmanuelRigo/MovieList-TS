import { InputGroup, Form, Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

export const ButtonPanel = () => {
  return (
    <>
      <Row className="flex-column h-100 justify-content-between ">
        <Col md={12}>
          <p className="display-6">Bienvenido Emanuel</p>
        </Col>
        <Col md={12}>
          <InputGroup className="mb-3 bg-warning">
            <Form.Control
              placeholder="Buscar en lista de peliculas"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="btn btn-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </Col>
        <Col md={12} className="bg-warning d-flex">
          <Col md={6}>
            <Link to="/add-movie" className="btn btn-dark">
              Agregar Peliculas
            </Link>
          </Col>
          <Col md={6}>
            <Button className="btn btn-dark">Settings</Button>
          </Col>
        </Col>

        <Col md={12}>
          <Button className="btn btn-dark w-100 p-1 fs-1">Random!</Button>
        </Col>
      </Row>
    </>
  );
};
