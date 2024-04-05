import MoviePlaylist from "./MoviePlaylist/MoviePlaylist";
import SongPlaylist from "./SongPlaylist/SongPlaylist";

function Playlists() {

    const handleResetClick = () => {
        //
      };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
      </div>
    )
}

export default Playlists;