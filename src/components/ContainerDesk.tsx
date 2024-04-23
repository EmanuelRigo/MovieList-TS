import { Col, Row } from "react-bootstrap";
import { InputGroup, Form, Button } from "react-bootstrap";

export const ContainerDesk = () => {
  return (
    <Row className="bg-primary">
      <Col md={12} xl={4} className="bg-success">
        <p className="display-6">Bienvenido Emanuel</p>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Buscar en lista de peliculas"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="btn btn-secondary" id="button-addon2">
            Buscar
          </Button>
        </InputGroup>

        <Row className="bg-primary">
          <Col md={6}>
            <Button className="btn btn-dark">Agregar Peliculas</Button>
          </Col>
          <Col md={6}>
            <Button className="btn btn-dark">Settings</Button>
          </Col>
          <Col md={12}>
            <Button className="btn btn-dark w-100 p-1 fs-1">Random!</Button>
          </Col>
        </Row>
      </Col>
      <Col md={6} xl={4} className="bg-warning">
        <p className="display-5">Lista de Peliculas</p>
      </Col>{" "}
      <Col md={6} xl={4} className="bg-danger">
        <p className="display-5">Pelicula Selecionada</p>
      </Col>
    </Row>
  );
};
