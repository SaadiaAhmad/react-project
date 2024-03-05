import { useState } from "react";
import BookCreate from "./BookCreate/BookCreate";
import BookList from "./BookList/BookList";
import './ReadingList.css';

function ReadingList() {
    const [ books, setBooks ] = useState([]);

    const createBook = (title) => {
        const newBook = {id: Math.round(Math.random() * 99999), title: title};
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
    }

    const editBook = () => {

    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Reading List</p>
                </div>
            </section>

            <div className="reading-list">
                <BookList bookList={books} onDelete={deleteBookById}></BookList>
                <BookCreate onCreate={createBook}></BookCreate>
            </div>

        </div>
    )
}

export default ReadingList;