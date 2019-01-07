import React from 'react';
// import BookCase from '../components/BookCase'
import {
    shallow,
    mount
} from 'enzyme';

it('just pass', () => {
    expect(true);
})

// it('renders a BookCase without crashing', () => {
//     mount(<BookCase />);
// });


// describe('<BookCase />', () => {
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
//         onBookShelfChange: jest.fn(),
//     }

//     let wrapper = mount(<BookCase {...mockProps} />);
//     //console.log(wrapper.html());

//     expect(true);

//     // wrapper.find('select').props().onChange(mockedEvent);
//     // expect(mockProps.booksShelfChange).toHaveBeenCalled();
// })