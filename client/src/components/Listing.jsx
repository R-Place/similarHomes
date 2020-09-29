import React from 'react';
import styled from 'styled-components';

function Listing({ listing }) {
  const {
    address, baths, bedrooms, district, price, photo, sqfootage,
  } = listing;

  const List = styled.div`
  display:flex;
  flex-direction:column
  `;
  const Description = styled.div`
  padding:2px
  justify-content:space-between
  `;
  const Image = styled.img`
  border-radius:10%;
  padding: 10px;
  width: 224px;
  height: 160px;
   `;

  const Item = styled.span`
  padding:2px;
  `;
  const Price = styled.span`
  padding:2px;
  font-size: 18px;
  font-weight:bold;
  `;
  return (
    <List>
      <Image
        src={photo}
        alt="Listing"
      />
      <Price>
        $
        {price}
      </Price>
      <Description>
        {baths}
        ba {' '}
        {bedrooms}
        bd {' '}
        {sqfootage}
        sqft {' '}
      </Description>
      <Item>
        {address}
      </Item>

      <Item>
        {district}

        , San Francisco
      </Item>

    </List>
  );
}

export default Listing;
