import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [ searchTerm, setSearchTerm ] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(searchTerm);
    }

    const clearSearch = () => {
        setSearchTerm('');
        props.clearSearch();
    }

    return (
        <div className="search-bar-container">
            <form onSubmit={handleFormSubmit}>
                <label>Search for images:</label>
                <input name="search" value={searchTerm} onChange={handleInputChange}></input>
                <a onClick={clearSearch} href="javascript.void(0);">Clear</a>
            </form>
        </div>
    );
}

export default SearchBar;