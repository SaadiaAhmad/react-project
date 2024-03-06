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

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) return {...book, title: newTitle}
            return book;
        });
        setBooks(updatedBooks);
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
                <BookList bookList={books} onDelete={deleteBookById} onEdit={editBookById}></BookList>
                <BookCreate onCreate={createBook}></BookCreate>
            </div>

        </div>
    )
}

export default ReadingList;