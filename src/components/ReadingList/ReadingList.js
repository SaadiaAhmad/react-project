import BookCreate from "./BookCreate/BookCreate";
import BookList from "./BookList/BookList";

function ReadingList() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Reading List</p>
                </div>
            </section>

            <BookList></BookList>
            <BookCreate></BookCreate>

        </div>
    )
}

export default ReadingList;