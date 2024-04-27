import { MovieData } from "../interfaces/interfaces";

export const CardRow = ({ movie }: MovieData) => {
  return <div>{movie.titulo}</div>;
};
