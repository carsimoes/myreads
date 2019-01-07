import React from 'react';
import BookAdd from '../Components/BookAdd'
import { shallow } from 'enzyme';

it('renders a BookAdd without crashing', () => {
    shallow(<BookAdd />);
});
