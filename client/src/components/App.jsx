import React from 'react';
import styled from 'styled-components';
import ListingContainer from './ListingContainer.jsx';
import Modal from './Modal.jsx';

const axios = require('axios');

const Title = styled.h1`
    font-size: 1.5em;
    position:absolute;
    // border:5px solid red;
    left: 440px;
    top: 30px;
    font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    `;
const AppWrap = styled.div`
    display:flex;
    flex-direction:column;
    // border:1px solid blue;
    width:1010;
    height: 500px;
    left: 440px;
    position:absolute;

    `;
const Test = styled.div`
    position:relative;
    width:1010;
    height: 300px;
    margin:50px auto;
    font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    left: 440px;
    // border:1px solid red;
    top:30px;
    `;
const Listing = styled.div`
    width:1010px;
    margin:50px auto;
    position:absolute;
    overflow: hidden;
    top: -110px;
    `;

const ShowModal = styled.button`
    width:200px;
    height:30px;
    left: 440px;
    top: 370px;
    position: absolute;
    cursor:pointer;
    border-radius: 8px;
    font-weight: bold;
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
    border-color:transparent;
    &:focus{outline:none;}
    &:hover {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 120, 130);
      border-color: rgb(0, 120, 130);
    }
    `;
const Heartred = styled.div`
    width: 30px;
    height: 30px;
    position:relative;
    left: 147px;
    top: -18px;
 `;
const ShowTextWrap = styled.div`
    left: -18px;
    position:relative;
    top: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      show: false,
      favorited: [],
    };
    this.getListings = this.getListings.bind(this);
    this.getFavorited = this.getFavorited.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.getListings();
    this.getFavorited();
  }

  getListings() {
    axios.get('/api/similarHomes')
      // .then((res) => res.data.slice(0, 14))
      .then((res) => this.setState({ listings: res.data }));
  }

  getFavorited() {
    axios.get('/api/favorited')
      .then((res) => this.setState({ favorited: res.data }));
  }

  showModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <AppWrap>
        <Title>Similar Homes You May Like</Title>
        <Test>
          <Listing id="listing">
            <ListingContainer
              listings={this.state.listings}
            />
          </Listing>
        </Test>
        <ShowModal
          onClick={this.showModal}
        >
          {' '}
          <ShowTextWrap>
            Show Saved Homes
          </ShowTextWrap>
          <Heartred>
            <svg viewBox="0 0 32 32">
              <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff5e3f" />
            </svg>
          </Heartred>
        </ShowModal>
        <Modal
          show={this.state.show}
          closeModal={this.showModal}
          listings={this.state.favorited}
        />
      </AppWrap>

    );
  }
}

export default App;
