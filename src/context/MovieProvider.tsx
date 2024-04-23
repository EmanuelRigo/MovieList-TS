import { MovieContext } from "./MovieContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const MovieProvider = ({ children }: props) => {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};
