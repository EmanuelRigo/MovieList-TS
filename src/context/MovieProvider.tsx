import { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const MovieProvider = ({ children }: props) => {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("./src/lista_peliculas.JSON");
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();
      setJsonData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const contextValue = {
    jsonData: jsonData,
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
