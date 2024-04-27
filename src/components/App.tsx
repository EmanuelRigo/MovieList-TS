import { ContainerMain } from "./ContainerMain";
import { MovieProvider } from "../context/MovieProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddMovieContainer } from "./AddMovieContainer";

//Back-end

//fin back-end

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerMain></ContainerMain>}></Route>
          <Route
            path="/add-movie"
            element={<AddMovieContainer></AddMovieContainer>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
