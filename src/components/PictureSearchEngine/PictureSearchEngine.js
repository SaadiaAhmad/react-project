import ImageList from './ImageList';
import SearchBar from './SearchBar';
import searchImages from '../../api';

function PictureSearchEngine() {
    let imageList = [];

    const handleSearchSubmit = (searchTerm) => {
        imageList = searchImages(searchTerm);
    };

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Search Engine for Pictures</p>
                </div>
            </section>

            <div>
                <SearchBar onSubmit={handleSearchSubmit}></SearchBar>
                <ImageList imageList={imageList}></ImageList>
            </div>
        </div>
    );
}

export default PictureSearchEngine;