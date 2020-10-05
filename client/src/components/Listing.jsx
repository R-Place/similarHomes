import React from 'react';
import styled from 'styled-components';

const List = styled.div`
font-size: 16px;
width:242px;
display:flex;
flex-direction:column;
object-fit: cover;


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
top: 10px;
right: 8px;
 `;

const Heartwhite = styled.div`
width: 30px;
height: 30px;
left: 195px;
top: -156px;
position:relative;

 `;

const Heartfill = styled.div`
width: 30px;
height: 30px;
left:195px;
top: -185px;
visbility:hidden;
position:relative;
 `;
const Heartfillvis = styled.div`
width: 30px;
height: 30px;
left:195px;
top: -185px;
position:relative;
 `;
const Heartred = styled.div`
width: 30px;
height: 30px;
left: 195px;
top: -157px;
position:relative;

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

const BrandNew = styled.div`
padding:2px 4px;
position:relative;
border-radius:20%;
top:30px;
left: -235px;
background-color:rgb(255, 255, 255);
font-size: 12px;
color: rgb(5, 34, 134);
height 15px;
width: 28.453px;

line-height:1.33;
font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
letter-spacing:-0.1px;
font-weight: bold;
box-sizing: border-box
margin-right: 4px;
 `;

const Filler = styled.div`
width: 0px;
height:0px;
`;

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorited: false };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    event.preventDefault();
    this.setState({ favorited: !this.state.favorited });
  }

  render() {
    const {
      address, baths, bedrooms, district, price, photo, sqfootage, brandNew,
    } = this.props.listing;

    return (
      <>

        <List>

          <Image
            src={photo}
            alt="Listing"
          />

          <Filler>
            {this.state.favorited ? (
              <>
                <Heartred onClick={() => this.handleFavorite()}>
                  <svg viewBox="0 0 32 32">
                    <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff5e3f" />
                  </svg>
                </Heartred>
                <Heartfill onClick={() => this.handleFavorite()} id="fill">
                  <svg viewBox="0 0 32 32">
                    <path d="M26.95 11.863a5.193 5.193 0 0 1-1.53 3.69l-1.913 1.912-7.373 7.373-7.371-7.373-1.912-1.912a5.214 5.214 0 1 1 7.377-7.366l1.906 1.907 1.908-1.908a5.214 5.214 0 0 1 8.908 3.677z" fillOpacity=".0" fill="#000" />
                  </svg>
                </Heartfill>
              </>
            ) : (
              <>
                <Heartwhite onClick={() => this.handleFavorite(event)}>
                  <svg viewBox="0 0 32 32">
                    <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#fff" />
                  </svg>
                </Heartwhite>
                <Heartfillvis onClick={() => this.handleFavorite(event)} id="fill">
                  <svg viewBox="0 0 32 32">
                    <path d="M26.95 11.863a5.193 5.193 0 0 1-1.53 3.69l-1.913 1.912-7.373 7.373-7.371-7.373-1.912-1.912a5.214 5.214 0 1 1 7.377-7.366l1.906 1.907 1.908-1.908a5.214 5.214 0 0 1 8.908 3.677z" fillOpacity=".3" fill="#000" />
                  </svg>
                </Heartfillvis>
              </>
            )}
          </Filler>

          <Price id="price">
            $
            {price.toLocaleString()}
          </Price>
          <Description>

            <Test
              src="https://r-place-photos.s3.us-east-2.amazonaws.com/Bed.png
    "
              alt="bed"
            />
            {bedrooms}
            bd
            {' '}
            {' '}
            <Test
              src="https://r-place-photos.s3.us-east-2.amazonaws.com/Baths.png
    "
              alt="bath"
            />
            {baths}
            ba
            {' '}
            {' '}
            <Test
              src="https://r-place-photos.s3.us-east-2.amazonaws.com/Sqft.png"
              alt="sqft"
            />
            {sqfootage.toLocaleString()}
            {' '}
            sqft
          </Description>
          <Item>
            {address.toLocaleString()}
          </Item>

          <Item>
            {district}

            , San Francisco, CA
          </Item>

        </List>
        <Filler>
          {brandNew && (
          <BrandNew>NEW</BrandNew>
          )}
        </Filler>

      </>
    );
  }
}

export default Listing;
