import BookItem from "../BookItem/BookItem";

function BookList(props) {
    console.log(props.bookList);
    return(
        <div>
            Book List
            <BookItem></BookItem>
        </div>
    )
}

export default BookList;