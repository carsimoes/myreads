import React from 'react';
import Book from '../Components/Book'
import { shallow, moun } from 'enzyme';

it('renders a book without crashing', () => {
    const mockProps = {
        book: {
            title: 'The Subtle Art of Not Giving a F*ck',
            publishedDate: '2001-10-01',
            authors: [
                'Mark Manson'
            ],
            imageLinks: {
                thumbnail: 'https://jamesclear.com/book/the-subtle-art-of-not-giving-a-f*ck'
            }
        },
        booksShelfChange: function () { },
    }

    shallow(<Book {...mockProps} />);
});


describe('<Book />', () => {
    const mockProps = {
        book: {
            title: 'The Subtle Art of Not Giving a F*ck',
            publishedDate: '2001-10-01',
            authors: [
                'Mark Manson'
            ],
            imageLinks: {
                thumbnail: 'https://jamesclear.com/book/the-subtle-art-of-not-giving-a-f*ck'
            }
        },
        booksShelfChange: jest.fn(),
    }

    const mockedEvent = {
        target: {
            value: 'wantToRead'
        }
    }

    let wrapper = shallow(<Book {...mockProps} />);
    wrapper.find('select').props().onChange(mockedEvent);
    expect(mockProps.booksShelfChange).toHaveBeenCalled();
})
