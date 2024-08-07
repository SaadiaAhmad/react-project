import { useContext, useState } from "react";
import "./BookCreate.css";
import BooksContext from "../../../context/booksReadingList";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    createBook(title);
  };
  return (
    <div className="book-create-container">
      <form onSubmit={handleSubmit}>
        <label>Add book title:</label>
        <input value={title} onChange={handleInputChange}></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
