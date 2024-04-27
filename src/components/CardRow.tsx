import { MovieData } from "../interfaces/interfaces";

export const CardRow = ({ movie }: MovieData) => {
  return (
    <div>
      <div className="card mt-3 todo-card text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title ">{movie.año}</h5>

              <p className="card-text">{movie.año}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
