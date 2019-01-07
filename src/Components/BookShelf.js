import React, { Component } from 'react'
import Book from './Book'
import { PropTypes } from 'prop-types'

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }

    handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    render() {
        const books = this.props.books

        return (
            <div className="bookshelf">
                <br></br>
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <br></br>
                <div className="bookshelf-books">
                    <div className="columns is-multiline ">
                        {books.map((book, index) => (
                            <Book
                                key={index}
                                book={book}
                                booksShelfChange={this.handleBookShelfChange}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf;