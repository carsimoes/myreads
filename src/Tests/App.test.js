import React from 'react'
import App from '../App'
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(
    <Router>
      <App> </App>
    </Router>
  );
})
