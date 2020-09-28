import React from 'react';

function Listing({ listing }) {
  const {
    address, baths, bedrooms, district, price, photo, sqfootage,
  } = listing;
  return (
    <div>
      <span>
        {address}
      </span>
      <span>
        {baths}
        ba
      </span>
      <span>
        {bedrooms}
        bd
      </span>
      <span>
        {district}
      </span>
      <span>
        $
        {price}
      </span>
      <img
        src={photo}
        alt="Listing"
      />
      <span>
        {sqfootage}
        sqft
      </span>
    </div>
  );
}


export default Listing;
