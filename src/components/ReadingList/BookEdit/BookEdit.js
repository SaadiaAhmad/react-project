import { useState } from "react";
import './BookEdit.css';

function BookEdit(props) {
    const [title, setTitle] = useState(props.titleValue);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onEditSave(title);
    }

    return(
        <div className="book-edit">
            <form onSubmit={handleSubmit}>
                <label>Book title</label>
                <input value={title} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

export default BookEdit;