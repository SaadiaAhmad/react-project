import { useContext, useState } from "react";
import './BookEdit.css';
import BooksContext from "../../../context/booksReadingList";

function BookEdit(props) {
    const [title, setTitle] = useState(props.book.title);
    const { editBookById } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onEditSave();
        editBookById(props.book.id, title);
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