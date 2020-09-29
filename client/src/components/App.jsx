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
      // .then((res) => res.data.slice(0, 14))
      .then((res) => this.setState({ listings: res.data }));
  }

  render() {
    const Title = styled.h1`
    font-size: 1.5em;
    position:fixed;
    `;
    const Listing = styled.div`
    padding:50px
    `;

    return (

      <div>
        <Title>Similar Homes You May Like</Title>
        <Listing>
          <ListingContainer listings={this.state.listings} />
        </Listing>
      </div>

    );
  }
}

export default App;
