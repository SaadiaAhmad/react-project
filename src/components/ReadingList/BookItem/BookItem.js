import { useState } from "react";
import BookEdit from "../BookEdit/BookEdit";
import './BookItem.css';

function BookItem(props) {
    const [ showEdit, setShowEdit ] = useState(false);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    }

    const onDelete = () => {
        props.onDelete(props.book.id);
    }

    const handleEditSave = (title) => {
        setShowEdit(false);
        props.onEdit(props.book.id, title);
    }

    let itemContent = <h3>{props.book.title}</h3>;
    if(showEdit) itemContent = <BookEdit titleValue={props.book.title} onEditSave={handleEditSave}></BookEdit>;

    const imageSrc = `https://picsum.photos/seed/${props.book.id}/200/250`;

    return(
        <div className="book-item">
            <div className="actions">
                <button className="edit" onClick={toggleEdit}></button>
                <button className="delete" onClick={onDelete}></button>
            </div>
            <img alt="books" src={imageSrc}></img>
            <div className="content">{itemContent}</div>
        </div>
    )
}

export default BookItem;