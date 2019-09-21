import React, { useState, Fragment } from "react";

import { getMovies } from "../../services/fakeMovieService";
import { IMovie } from "../../models/IMovie";
import Like from "../common/like/Like";
import Pagination from "../common/pagination/Pagination";
import { Paginate } from "../../utils/Paginate";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handleButton = (movie: IMovie) => {
    const filteredMovies = movies.filter(m => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const handleLike = (movie: IMovie) => {
    const moviesClone = [...movies];
    const index = moviesClone.indexOf(movie);
    moviesClone[index] = { ...moviesClone[index] };
    moviesClone[index].liked = !moviesClone[index].liked;
    setMovies(moviesClone);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const { length: count } = movies;
  let display: any;
  if (count === 0) {
    display = (
      <h3 className="ui header">There are no movies in the database</h3>
    );
  } else {
    const paginatedMovies = Paginate(movies, currentPage, pageSize);
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedMovies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onLike={() => handleLike(movie)} />
                </td>
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
          <tfoot>
            <tr>
              <td colSpan={6}>
                <Pagination
                  currentPage={currentPage}
                  itemsCount={count}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </Fragment>
    );
  }

  return <div>{display}</div>;
};

export default Movies;
