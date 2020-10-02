import React from 'react';
import styled from 'styled-components';

const List = styled.div`
font-size: 16px;
width:242px;
display:flex;
flex-direction:column;
// border:5px solid blue;
`;
const Description = styled.div`
font-size: 16px;
padding:2px;
justify-content:space-between;
`;
const Image = styled.img`
border-radius:10%;
padding: 9px;
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
text-overflow:ellipsis;
overflow: hidden;
white-space: nowrap;
padding:2px;
width: 218px;
`;
const Test = styled.img`
width: 22px;
height: 22px;
top: 3px;
position: relative;
`;
const Price = styled.span`
position:relative;
top: 5px;
font-size: 16px;
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
        {price.toLocaleString()}
      </Price>
      <Description>

        <Test src="https://r-place-photos.s3.us-east-2.amazonaws.com/Bed.png
" alt="bed"/>
        {bedrooms}
        bd {' '}
        <Test src="https://r-place-photos.s3.us-east-2.amazonaws.com/Baths.png
" alt="bath"/>
        {baths}
        ba {' '}
        <Test src="https://r-place-photos.s3.us-east-2.amazonaws.com/Sqft.png
" alt="sqft"/>
        {sqfootage.toLocaleString()}
        {' '}sqft
      </Description>
      <Item>
        {address.toLocaleString()}
      </Item>

      <Item>
        {district}

        , San Francisco, CA
      </Item>
    </List>

  );
}

export default Listing;
