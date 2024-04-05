import MoviePlaylist from "./MoviePlaylist/MoviePlaylist";
import SongPlaylist from "./SongPlaylist/SongPlaylist";

function Playlists() {

    const handleResetClick = () => {
        //
      };

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Counter</p>
                </div>
            </section>
            <div className="container is-fluid m-5">
                <button onClick={() => handleResetClick()} className="button is-danger">
                    Reset Both Playlists
                </button>
                <hr />
                <MoviePlaylist />
                <hr />
                <SongPlaylist />
            </div>
        </div>
    )
}

export default Playlists;