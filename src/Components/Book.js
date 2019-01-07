import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        booksShelfChange: PropTypes.func.isRequired
    }

    handleShelfChange = (e) => {
        let newValue = e.target.value;
        this.props.booksShelfChange(this, newValue)
    }

    render() {
        const book = this.props.book
        const bookThumbnail = book.imageLinks !== undefined ? book.imageLinks.thumbnail : '';
        const defaultValue = this.props.book.shelf === undefined ? 'none' : this.props.book.shelf;

        return (
            <div className="column is-one-fifth">
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${bookThumbnail}")`
                        }}></div>

                        <div className="book-shelf-changer">
                            <select
                                id="changeStatus"
                                onChange={this.handleShelfChange}
                                defaultValue={defaultValue}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>

                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </div>
        )
    }
}

export default Book;