import React from 'react';
import styled from 'styled-components';

const List = styled.div`
width:242px;
display:flex;
flex-direction:column;
// border:5px solid blue;
`;
const Description = styled.div`
padding:2px
justify-content:space-between;
`;
const Image = styled.img`
border-radius:10%;
padding: 10px;
width: 225px;
height: 160px;
position:relative;
right: 8px;
 `;

const Heart = styled.img`
border-radius:10%;
width: 25px;
height: 25px;
right: 40px;
top: 40px;
position:relative;
// background-color:red;
 `;

const Item = styled.span`
padding:2px;
`;
const Price = styled.span`
padding:2px;
font-size: 18px;
font-weight:bold;
`;

function Listing({ listing }) {
  const {
    address, baths, bedrooms, district, price, photo, sqfootage
  } = listing;

  return (
    <List>
      <Heart src="https://i.ibb.co/dGv2FgL/icons8-heart-100.png"  alt='heart'/>

      <Image
        src={photo}
        alt="Listing"
      />
      <Price id="price">
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
