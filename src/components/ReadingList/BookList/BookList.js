import BookItem from "../BookItem/BookItem";
import './BookList.css';

function BookList(props) {
    const renderedBooks = props.bookList.map((book) => <BookItem book={book} key={book.id} onDelete={props.onDelete}></BookItem>)

    return(
        <div className="book-list-container">
            {renderedBooks}
        </div>
    )
}

export default BookList;