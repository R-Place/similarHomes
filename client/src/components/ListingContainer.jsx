import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
overflow:hidden
width:1010;
`;

const Prev = styled.button`
width:47px;
height:47px;
border-radius:50%;
border:1px solid purple;
position:absolute;
top:40%;
left: -10px;
`;
const Next = styled.button`
width:47px;
height:47px;
border-radius:50%;
border:1px solid purple;
position:absolute;
top:40%;
right: -10px;
`;

const Test = styled.div`
position:relative;
width:1010;
margin:50px auto;
`;

let motion = 0;
function ListingContainer({ listings }) {
  const houses = listings.map((listing) => (
    <Listing listing={listing} key={Math.random()} />
  ));

  function handleClickNext() {
    document.getElementById('container').style.transform = `translateX(${motion - 1000}px)`;
    motion -= 1000;
  }
  function handleClickPrev() {
    document.getElementById('container').style.transform = `translateX(${motion + 1000}px)`;
    motion += 1000;
  }

  return (
    <Test>
      <Container id="container">
        {houses}
      </Container>

      <Prev onClick={handleClickPrev}>
        Prev
      </Prev>
      <Next onClick={handleClickNext}>
        Next
      </Next>

    </Test>
  );
}

export default ListingContainer;
