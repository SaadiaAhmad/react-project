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

    return (
        <div className="search-bar-container">
            <form onSubmit={handleFormSubmit}>
                <input name="search" value={searchTerm} onChange={handleInputChange}></input>
            </form>
        </div>
    );
}

export default SearchBar;