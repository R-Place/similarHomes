import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
overflow:hidden;
width:1010;
`;

function ListingContainer({ listings }) {
  const houses = listings.map((listing) => (
    <Listing listing={listing} key={Math.random()} />
  ));

  return (
    <Container>
      {houses}
    </Container>

  );
}

export default ListingContainer;
