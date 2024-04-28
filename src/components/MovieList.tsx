import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Row } from "react-bootstrap";
//import { CardMovie } from "./CardMovie";
import { CardRow } from "./CardRow";

interface MovieData {
  año: string;
  mes: string;
  dia: string;
  titulo: string;
}

interface ContextType {
  jsonData: MovieData[];
}

export const MovieList = () => {
  const newLocal = useContext(MovieContext);
  const { jsonData }: ContextType = newLocal;

  console.log(jsonData);

  return (
    <>
      <p className="display-5 text-light">Lista de Peliculas</p>
      <Row className="overflow-auto h-100">
        {jsonData.map((item) => {
          return <CardRow movie={item}></CardRow>;
        })}
      </Row>
    </>
  );
};
