import { useContext, useEffect } from "react";
import BookCreate from "./BookCreate/BookCreate";
import BookList from "./BookList/BookList";
import './ReadingList.css';
import BooksContext from "../../context/booksReadingList";

function ReadingList() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);
    
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Reading List</p>
                </div>
            </section>

            <div className="reading-list">
                <BookList></BookList>
                <BookCreate></BookCreate>
            </div>

        </div>
    )
}

export default ReadingList;