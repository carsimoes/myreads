import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { PropTypes } from 'prop-types'
import Menu from './Menu';

class BookCase extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }

    handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    render() {
        const books = this.props.books

        return (
            <div className="list-books">
                <Menu></Menu>
                <div className="list-books-content">
                    <div>

                        <BookShelf
                            books={books.filter((book) => (book.shelf === "currentlyReading"))}
                            title="Currently Reading"
                            onBookShelfChange={this.handleBookShelfChange}
                        />

                        <BookShelf
                            books={books.filter((book) => (book.shelf === "read"))}
                            title="Read"
                            onBookShelfChange={this.handleBookShelfChange}
                        />

                        <BookShelf
                            books={books.filter((book) => (book.shelf === "wantToRead"))}
                            title="Want to Read"
                            onBookShelfChange={this.handleBookShelfChange}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default BookCase;