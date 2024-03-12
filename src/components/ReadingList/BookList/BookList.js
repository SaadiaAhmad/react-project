import { useContext } from "react";
import BookItem from "../BookItem/BookItem";
import './BookList.css';
import BooksContext from "../../../context/booksReadingList";

function BookList() {
    const { books } = useContext(BooksContext);
    const renderedBooks = books.map((book) => <BookItem book={book} key={book.id}></BookItem>)

    return(
        <div className="book-list-container">
            {renderedBooks}
        </div>
    )
}

export default BookList;