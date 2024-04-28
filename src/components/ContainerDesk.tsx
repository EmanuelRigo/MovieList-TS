import { Col, Row } from "react-bootstrap";
import { MovieList } from "./MovieList";
import { CardMovie } from "./CardMovie";
import { ButtonPanel } from "./ButtonPanel";

export const ContainerDesk = () => {
  return (
    <Row className="h-100 py-3 bg-gray-custom rounded-3 overflow-hidden">
      <Col md={12} xl={4} className="h-100">
        <ButtonPanel></ButtonPanel>
      </Col>
      <Col
        md={6}
        xl={4}
        className="h-100 d-flex flex-column text-dark overflow-hidden"
      >
        <MovieList></MovieList>
      </Col>{" "}
      <Col md={6} xl={4} className="h-100  d-flex align-items-center">
        <CardMovie></CardMovie>
      </Col>
    </Row>
  );
};
