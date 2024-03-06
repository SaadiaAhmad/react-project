import { useState } from "react";
import BookEdit from "../BookEdit/BookEdit";
import './BookItem.css';

function BookItem(props) {
    const [ showEdit, setShowEdit ] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    }

    const editbyId = (title) => {
        setShowEdit(false);
        props.onEdit(props.book.id, title);
    }

    const deleteBookById = () => {
        props.onDelete(props.book.id);
    }

    let itemContent = <h3>{props.book.title}</h3>;
    if(showEdit) itemContent = <BookEdit titleValue={props.book.title} onEditSave={editbyId}></BookEdit>;

    return(
        <div className="book-item">
            <div className="actions">
                <button className="edit" onClick={toggleEdit}></button>
                <button className="delete" onClick={deleteBookById}></button>
            </div>
            <div>{itemContent}</div>
        </div>
    )
}

export default BookItem;