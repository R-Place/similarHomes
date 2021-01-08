import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';

const Container = styled.div`
display:flex;
justify-content:space-between;
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
left: 0px;
cursor:pointer;
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
right: 45px;
cursor:pointer;
&:focus{outline:none;}
`;

const Test = styled.div`
width:1010;
margin:50px auto;
position:relative;
`;

const ShowModal = styled.button`
border-radius:8%;
padding: 9px;
width: 234px;
height: 160px;
position:absolute;
left: 359%;
top: 7%;
&:focus{outline:none;}
background-color: rgb(232, 233, 234);
border: rgb(232, 233, 234);
cursor:pointer;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
font-size:16px;
`;

const ShowModalInfo = styled.div`
font-size: 16px;
font-wieght: bold;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
position:relative;
left:-17%;
top:15px;
`;

const ShowModalCity = styled.div`
font-size: 20px;
font-weight: bold;
line-height:1.2;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
position:relative;
left:-19%;
top: 15px;
`;

const TakeALook = styled.button`
font-size: 16px;
font-weight: bold;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
position:relative;
left:-24%;
top:23px;
border-color:transparent;
color:rgb(0, 120, 130);
background-color:rgb(255, 255, 255);
padding: 8px 16px;
white-space: nowrap;
cursor:pointer;
border-radius:8px;
&:focus{outline:none;}
&:hover {
  background-color: rgb(0, 120, 130);
  color: rgb(255, 255, 255);
  // border-color: rgb(0, 120, 130);
}
`;

const Heartred = styled.div`
  width: 30px;
  height: 30px;
  position:absolute;
  left: 62%;
  top:68px;
 `;

let scroll = 0;

class ListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motion: scroll,
      favorited: {},
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.newHandleFavorite = this.newHandleFavorite.bind(this);
  }

  componentDidMount() {
    const { listings } = this.props;
    const thefavs = {};
    listings.map((listing) => (
      thefavs[listing.index] = listing.favorited
    ));
    this.setState({ favorited: thefavs });
  }

  handleClickNext(event) {
    document.getElementById('container').style.transform = `translateX(${scroll - 965}px)`;
    scroll -= 965;
    this.setState({ motion: scroll });
    event.preventDefault();
  }

  handleClickPrev(event) {
    document.getElementById('container').style.transform = `translateX(${scroll + 965}px)`;
    scroll += 965;
    this.setState({ motion: scroll });
    event.preventDefault();
  }

  newHandleFavorite(id, index) {
    const { favorited } = this.state;
    event.preventDefault();
    favorited[index] = !favorited[index];

    this.setState({ favorited });
    axios.post('/api/similarHomes', {
      id,
      favorited: favorited[index],
    });
  }

  render() {
    const { listings } = this.props;
    const houses = listings.map((listing, i) => (
      <Listing listing={listing} key={Math.random()} newHandleFavorite={this.newHandleFavorite} favorited={this.state.favorited} />
    ));

    const scrollable = this.state.motion;
    return (
      <Test>
        <Container id="container">
          {houses}
          <ShowModal onClick={this.props.showModal}>
            <ShowModalInfo>
              See saved homes in
            </ShowModalInfo>

            <ShowModalCity>

              San Francisco

            </ShowModalCity>
            <Heartred>
              <svg viewBox="0 0 32 32">
                <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff5e3f" />
              </svg>
            </Heartred>
            <TakeALook>
              Take a look
            </TakeALook>
          </ShowModal>
        </Container>

        {scrollable === -2895 && (

        <Prev onClick={this.handleClickPrev}>
          <svg viewBox="0 0 32 32">
            <path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#869099" />
          </svg>
        </Prev>

        ) }
        {scrollable === -965 && (
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
        {scrollable === -1930 && (
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
