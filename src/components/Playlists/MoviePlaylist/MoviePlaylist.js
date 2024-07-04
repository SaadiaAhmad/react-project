import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../../../data/playlists";
import { addMovie, removeMovie } from "../../../store";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => state.movies);

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    dispatch(action);
  };
  const handleMovieRemove = (movie) => {
    const action = removeMovie(movie);
    dispatch(action);
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li
        key={movie}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          padding: "12px",
        }}
      >
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
          style={{ marginRight: "40px" }}
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
