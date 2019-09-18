import React, { useState, Fragment } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { IMovie } from "../../models/IMovie";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState(getMovies());
  const handleButton = (movie: IMovie) => {
    const filteredMovies = movies.filter(m => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const { length: count } = movies;

  let display: any;
  if (count === 0) {
    display = (
      <h3 className="ui header">There are no movies in the database</h3>
    );
  } else {
    display = (
      <Fragment>
        <h3 className="ui header">
          There {count > 1 ? "are" : "is"} {count} movie
          {count > 1 ? "s" : ""} in the database
        </h3>
        <table className="ui striped table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="ui small red button"
                    onClick={() => handleButton(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }

  return <div>{display}</div>;
};

export default Movies;
