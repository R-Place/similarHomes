import React from 'react';
import Listing from './Listing.jsx';


function ListingContainer({listings}) {
  const houses = listings.map((listing) => <Listing listing={listing} />);

  return (
    <div>

      {houses}
    </div>

  );
}

export default ListingContainer;
