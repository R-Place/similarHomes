import React from 'react';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import axios from 'axios';
import App from '../client/src/components/App.jsx';
import Listing from '../client/src/components/Listing.jsx';
import ListingContainer from '../client/src/components/ListingContainer.jsx';

describe('App', () => {
  // make our assertion and what we expect to happen
  it('find the id listing', () => {
    expect(shallow(<App />).find('#listing').length).toEqual(1);
  });
});

describe('should render static HTML', () => {
  it('should render to static HTML', () => {
    expect(render(<App />).text()).toEqual('Similar Homes You May Like>');
  });
});

describe('Tests for App component', () => {
  it('should render without error', (done) => {
    expect(shallow(<App />).exists()).toBe(true);
    done();
  });
});
