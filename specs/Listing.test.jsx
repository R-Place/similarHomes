import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import axios from 'axios';
import App from '../client/src/components/App.jsx';
import Listing from '../client/src/components/Listing.jsx';
import ListingContainer from '../client/src/components/ListingContainer.jsx';

Enzyme.configure({ adapter: new Adapter()});

describe('Listing', () => {
  // make our assertion and what we expect to happen
  it('Render the image of the listing', () => {
    const image = shallow(<Image />);
    expect(image.exists()).toBe(true);
  });
});
