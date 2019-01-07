import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import { PropTypes } from 'prop-types'
import { debounce } from "lodash";

class BookSearch extends Component {

    state = {
        query: ''
    }

    static propTypes = {
        onBookShelfChange: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        searchTextChanged: PropTypes.func.isRequired
    }

    searchTextChanged = debounce((text) => {
        this.setState({ loadingSearchBooks: true });
        this.props.searchTextChanged(text);
    }, 600);

    handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => {
                                this.setState({ query: e.target.value });
                                this.searchTextChanged(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            <Book
                                key={index}
                                book={book}
                                booksShelfChange={this.handleBookShelfChange}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch


