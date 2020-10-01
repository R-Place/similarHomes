import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
overflow:hidden
width:1010;
transition: 0.8s;
`;

const Prev = styled.button`
width:38px;
height:38px;
border-radius:50%;
border:1px solid purple;
position:absolute;
top:40%;
left: -1px;
`;
const Next = styled.button`
width:38px;
height:38px;
border-radius:50%;
border:1px solid purple;
position:absolute;
top:40%;
right: -1px;
`;

const Test = styled.div`
position:relative;
width:1010;
margin:50px auto;
`;

let scroll = 0;

class ListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { motion: scroll };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }

  handleClickNext(event) {
    document.getElementById('container').style.transform = `translateX(${scroll - 1010}px)`;
    scroll -= 1010;
    this.setState({ motion: scroll });
    event.preventDefault();
  }

  handleClickPrev(event) {
    document.getElementById('container').style.transform = `translateX(${scroll + 1010}px)`;
    scroll += 1010;
    this.setState({ motion: scroll });
    event.preventDefault();
  }

  render() {
    const { listings } = this.props;
    const houses = listings.map((listing) => (
      <Listing listing={listing} key={Math.random()} />
    ));
    const scrollable = this.state.motion;
    if (scrollable === 0) {
      return (
        <Test>
          <Container id="container">
            {houses}
          </Container>
          <Next onClick={this.handleClickNext}>
            &gt;
          </Next>
        </Test>
      );
    }
    if (scrollable === -3030) {
      return (
        <Test>
          <Container id="container">
            {houses}
          </Container>

          <Prev onClick={this.handleClickPrev}>
            &lt;
          </Prev>
        </Test>
      );
    }
    if (scrollable === -1010 || -2020) {
      return (
        <Test>
          <Container id="container">
            {houses}
          </Container>

          <Prev onClick={this.handleClickPrev}>
            &lt;
          </Prev>
          <Next onClick={this.handleClickNext}>
            &gt;
          </Next>

        </Test>
      );
    }

    return (
      <Test>
        <Container id="container">
          {houses}
        </Container>
      </Test>

    );
  }
}
// function ListingContainer({ listings }) {
//   const houses = listings.map((listing) => (
//     <Listing listing={listing} key={Math.random()} />
//   ));

//   function handleClickNext() {
//     document.getElementById('container').style.transform = `translateX(${motion - 1010}px)`;
//     motion -= 1010;
//   }
//   function handleClickPrev() {
//     document.getElementById('container').style.transform = `translateX(${motion + 1010}px)`;
//     motion += 1010;
//   }

//   return (
//     <Test>
//       <Container id="container">
//         {houses}
//       </Container>

//       {/* <Prev onClick={handleClickPrev}>
//         Prev
//       </Prev> */}
//       <Next onClick={handleClickNext}>
//         Next
//       </Next>

//     </Test>
//   );
// }

export default ListingContainer;
