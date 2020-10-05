import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
transition: 0.8s;
object-fit: cover;

`;
// overflow:hidden

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
&:focus{outline:none;}
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
&:focus{outline:none;}
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
    return (
      <Test>
        <Container id="container">
          {houses}
        </Container>

        {scrollable === -3030 && (
        <Prev onClick={this.handleClickPrev}>
          <svg viewBox="0 0 32 32">
            <path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099" />
          </svg>
        </Prev>
        ) }
        {scrollable === -1010 && (
        <>
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
        </>
        ) }
        {scrollable === -2020 && (
        <>
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
        </>
        ) }
        {scrollable === 0 && (
        <Next onClick={this.handleClickNext}>
          <svg viewBox="0 0 32 32">
            <path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099" />
          </svg>
        </Next>
        ) }
      </Test>
    );
  }
}
export default ListingContainer;
