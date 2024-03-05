import { useState } from "react";
import BookCreate from "./BookCreate/BookCreate";
import BookList from "./BookList/BookList";

function ReadingList() {
    const [ books, setBooks ] = useState([]);

    const createBook = (title) => {
        // id: books.length will be changed shortly as this is goingto cause bugs
        const newBook = {id: books.length, title: title};
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
    }

    const editBook = () => {

    }

    const deleteBook = () => {
        
    }

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Reading List</p>
                </div>
            </section>

            <BookList bookList={books}></BookList>
            <BookCreate onCreate={createBook}></BookCreate>

        </div>
    )
}

export default ReadingList;