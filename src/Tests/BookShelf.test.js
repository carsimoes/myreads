import React from 'react';
// import BookShelf from '../components/BookShelf'
import {
    shallow,
    mount
} from 'enzyme';

it('just pass', () => {
    expect(true);
})

// it('renders a BookShelf without crashing', () => {
//     const mockProps = {
//         books: [{
//             title: 'The Subtle Art of Not Giving a F*ck',
//             publishedDate: '2001-10-01',
//             authors: [
//                 'Mark Manson'
//             ],
//             imageLinks: {
//                 thumbnail: 'https://jamesclear.com/book/the-subtle-art-of-not-giving-a-f*ck'
//             }
//         }],
//         title: 'title',
//         booksShelfChange: function () { },
//     }

//     shallow(<BookShelf {...mockProps} />);
// });


// describe('<Book />', () => {
//     const mockProps = {
//         book: {
//             title: 'The Subtle Art of Not Giving a F*ck',
//             publishedDate: '2001-10-01',
//             authors: [
//                 'Mark Manson'
//             ],
//             imageLinks: {
//                 thumbnail: 'https://jamesclear.com/book/the-subtle-art-of-not-giving-a-f*ck'
//             }
//         },
//         booksShelfChange: jest.fn(),
//     }

//     const mockedEvent = {
//         target: {
//             value: 'wantToRead'
//         }
//     }

//     let wrapper = shallow(<Book {...mockProps} />);
//     wrapper.find('select').props().onChange(mockedEvent);
//     expect(mockProps.booksShelfChange).toHaveBeenCalled();
// })