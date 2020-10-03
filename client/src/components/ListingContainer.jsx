import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
// overflow:hidden
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
    event.preventDefault();
    document.getElementById('container').style.transform = `translateX(${scroll - 1010}px)`;
    scroll -= 1010;
    this.setState({ motion: scroll });
  }

  handleClickPrev(event) {
    event.preventDefault();
    document.getElementById('container').style.transform = `translateX(${scroll + 1010}px)`;
    scroll += 1010;
    this.setState({ motion: scroll });
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
            <svg viewBox="0 0 32 32">
              <path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099" />
            </svg>
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
            <svg viewBox="0 0 32 32">
              <path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099" />
            </svg>
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
            <svg viewBox="0 0 32 32">
              <path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099" />
            </svg>
          </Prev>
          <Next onClick={this.handleClickNext}>
            <svg viewBox="0 0 32 32">
              <path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099" />
            </svg>
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
