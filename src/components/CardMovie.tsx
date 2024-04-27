//import { MovieData } from "../interfaces/interfaces";

import { Row, Col, Image } from "react-bootstrap";

export const CardMovie = () => {
  return (
    <Row className="bg-dark">
      <img src="../src/public/poster3.jpg" alt="" />
      <Image fluid src="../src/public/poster3.jpg"></Image>
      <Col className="bg-primary col-12">gasf</Col>
      <Col className="bg-warning col-12">gasf</Col>
    </Row>
  );
};
