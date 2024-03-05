import BookEdit from "../BookEdit/BookEdit";
import './BookItem.css';

function BookItem(props) {
    const deleteBookById = () => {
        props.onDelete(props.book.id);
    }

    return(
        <div className="book-item">
            <div className="actions">
                <button className="delete" onClick={deleteBookById}></button>
            </div>
            <p>{props.book.title}</p>
        </div>
    )
}

export default BookItem;