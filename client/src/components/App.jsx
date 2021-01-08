import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import ListingContainer from './ListingContainer.jsx';
import Modal from './Modal.jsx';

const Title = styled.h1`
    font-size: 1.5em;
    position:absolute;
    // left: 285px;
    top: 25px;
    font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    `;
const AppWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin: auto;
  width: 50%;
    height: 500px;
    left: 280px;
    position:absolute;
    `;
const ListingWrap = styled.div`
    position:relative;
    width:1010;
    height: 300px;
    // margin:50px auto;
    font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    // left: 280px;
    // top:30px;
    `;
const Listing = styled.div`
    width:965px;
    // margin:50px auto;
    // position:absolute;
    overflow: hidden;
    // top: -110px;
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
      .then((res) => this.setState({ listings: res.data }));
  }

  getFavorited() {
    axios.get('/api/favorited')
      .then((res) => this.setState({ favorited: res.data }));
  }

  showModal() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { listings, show, favorited } = this.state;
    return (
      <AppWrap>
        <Title>Similar Homes You May Like</Title>
        <ListingWrap>
          <Listing id="listing">
            <ListingContainer
              listings={listings}
              showModal={this.showModal}
            />
          </Listing>
        </ListingWrap>
        <Modal
          show={show}
          closeModal={this.showModal}
          listings={favorited}
        />
      </AppWrap>
    );
  }
}

export default App;
