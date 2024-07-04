import { useContext, useState } from "react";
import BookEdit from "../BookEdit/BookEdit";
import "./BookItem.css";
import BooksContext from "../../../context/booksReadingList";

function BookItem(props) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const onDelete = () => {
    deleteBookById(props.book.id);
  };

  const handleEditSave = () => {
    setShowEdit(false);
  };

  let itemContent = <h3>{props.book.title}</h3>;
  if (showEdit)
    itemContent = (
      <BookEdit book={props.book} onEditSave={handleEditSave}></BookEdit>
    );

  const imageSrc = `https://picsum.photos/seed/${props.book.id}/200/250`;

  return (
    <div className="book-item">
      <div className="actions">
        <button className="edit" onClick={toggleEdit}></button>
        <button className="delete" onClick={onDelete}></button>
      </div>
      <img alt="books" src={imageSrc}></img>
      <div className="content">{itemContent}</div>
    </div>
  );
}

export default BookItem;
