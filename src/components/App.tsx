import { ContainerMain } from "./ContainerMain";
import { MovieProvider } from "../context/MovieProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MovieProvider>
      <ContainerMain></ContainerMain>
    </MovieProvider>
  );
}

export default App;
