import { useState } from 'react';
import './BookCreate.css';

function BookCreate(props) {
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle('');
        props.onCreate(title);
    }
    return(
        <div className="book-create-container">
            <form onSubmit={handleSubmit}>
                <label>Add book title:</label>
                <input value={title} onChange={handleInputChange}></input>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default BookCreate;