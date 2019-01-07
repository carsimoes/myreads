import React from 'react';
import Menu from '../Components/Menu'
import { shallow, mount } from 'enzyme';

it('renders a Menu without crashing', () => {
    mount(<Menu />);
});
