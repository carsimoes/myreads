import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './Data/BooksAPI'

import BookSearch from './Components/BookSearch';
import BookCase from './Components/BookCase';
import BookAdd from './Components/BookAdd';

class BooksApp extends React.Component {

  state = {
    books: [],
    searchBooks: [],
    searchText: ''
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  moveBookShelf = (book, newValue) => {

    book.props.book.shelf = newValue;

    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.props.book.id).concat([book.props.book])
    }))

    BooksAPI.update(book.props.book, newValue);
  }

  searchTextChanged = async (searchText) => {

    this.setState({ searchText: searchText });
    let searchBooks = [];

    if (searchText === '') {
      this.setState({ searchBooks })
      return;
    }

    const searchReturn = await BooksAPI.search(searchText);
    searchBooks = searchReturn.error !== 'empty query' ? searchReturn : [];

    searchBooks = searchBooks.map(b => {
      const book = this.state.books.find(book => book.id === b.id);
      book !== undefined ? b.shelf = book.shelf : b.shelf = 'none';
      return b;
    });

    this.setState({ searchBooks });
  }

  render() {
    return (

      <div className="app" >
        <Route exact path="/" render={() => (
          <BookCase
            books={this.state.books}
            onBookShelfChange={this.moveBookShelf} />
        )} />
        <Route exact path="/search" render={() => (
          <BookSearch
            onBookShelfChange={this.moveBookShelf}
            books={this.state.searchBooks}
            searchTextChanged={this.searchTextChanged}
          />)} />

        <BookAdd></BookAdd>
      </div>
    )
  }
}

export default BooksApp