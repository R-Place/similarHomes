import React from 'react';
import styled from 'styled-components';
import ListingContainer from './ListingContainer.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('/api/similarHomes')
      .then((res) => res.data.slice(0, 14))
      .then((res) => this.setState({ listings: res }));
  }

  render() {
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;
    return (
      <div>
        <Title>Similar Homes You May Like</Title>
        <ListingContainer listings={this.state.listings} />
      </div>
    );
  }
}

export default App;
