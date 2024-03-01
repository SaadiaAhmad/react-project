import './SearchBar.css';

function SearchBar(props) {
    const handleSubmit = () => {
        props.onSubmit('cars');
    }

    return (
        <div className="search-bar-container">
            <input></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SearchBar;