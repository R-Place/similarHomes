import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
// overflow:hidden
width:1010;
transition: 0.8s;
`;

const Prev = styled.button`
border: 1px solid rgb(232, 233, 234);
font-size: 21px;
background-color: rgb(255, 255, 255);
width:34px;
height:34px;
border-radius:50%;
position:absolute;
top:50%;
left: -1px;
white-space: nowrap;
`;
const Next = styled.button`
border: 1px solid rgb(232, 233, 234);
background-color: rgb(255, 255, 255);
font-size: 21px;
width:34px;
height:34px;
border-radius:50%;
position:absolute;
top:50%;
right: 0px;
white-space: nowrap;
`;

const Test = styled.div`
width:1010;
margin:50px auto;
position:relative;
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

export default ListingContainer;
