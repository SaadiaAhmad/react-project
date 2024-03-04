import ImageList from './ImageList';
import SearchBar from './SearchBar';
import searchImages from '../../api';
import { useState } from 'react';

function PictureSearchEngine() {
    const [ imageList, setImageList ] = useState([]);

    const handleSearchSubmit = async (searchTerm) => {
        const images = await searchImages(searchTerm);
        setImageList(images);
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