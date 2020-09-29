import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

function ListingContainer({listings}) {
  const houses = listings.map((listing) => <Listing listing={listing} />);

  const Container = styled.div`
 display:flex;
 justify-content:space-between
  `;

  return (
    <Container>
      {houses}
    </Container>

  );
}

export default ListingContainer;
