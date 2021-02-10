import React from 'react';
import styled from 'styled-components';

const CloseModal = styled.button`
width:24px;
height:24px;
background: #fff;
border: 1px solid #fff;
cursor:pointer;
&:focus{outline:none;}
`;
const Backdrop = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.3);
padding:50px;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;
const ModalStyle = styled.div`
background: #fff;
border-Radius: 5px;
width: 500px;
height: 800px;
margin: 0px auto;
padding: 30;
position: relative;
overflow:hidden;
z-index: 1
`;
const Footer = styled.div`
left: 3px;
top: 3px;
position absolute;
`;

const Image = styled.img`
border-radius:10%;
padding: 9px;
width: 225px;
height: 160px;
position:relative;
top: -4px;
right: 8px;
 `;

const ListingWrap = styled.div`
width:235px;
height:260px;
display:flex;
flex-direction:column;
position:relative;
left: 9px;
`;

const ListingContainer = styled.div`
width:500px;
height:800px;
overflow: auto;
display:grid;
grid-template-columns: 50% 50%;
`;

const Price = styled.span`
position:relative;
top: -9px;
font-size: 16px;
font-size: 18px;
font-weight:bold;
`;
const Test = styled.img`
width: 22px;
height: 22px;
top: 5px;
position: relative;

`;

const Description = styled.div`
font-size: 16px;
padding:3px;
top:-20px;
left: -3px;
justify-content:space-between;
position:relative;

`;
const Item = styled.div`
height: 90px;
width: 230px;
padding: 2px;
position:relative;
top: -20px;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;

`;
const Item2 = styled.div`

text-overflow:ellipsis;
white-space: nowrap;
font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
width: 230px;
padding: 2px;
position:relative;
top: -20px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.props.closeModal(e);
  }

  render() {
    const { listings } = this.props;
    const listItems = listings.map((house) => (
      <ListingWrap>

        <Image src={house.photo} />
        {' '}
        <Price>
          {' '}
          $
          {house.price.toLocaleString()}
        </Price>
        <Description>
          <Test
            src="https://r-place-photos.s3.us-east-2.amazonaws.com/Bed.png"
            alt="bed"
          />
          {house.bedrooms}
          bd
          {' '}
          {' '}
          <Test
            src="https://r-place-photos.s3.us-east-2.amazonaws.com/Baths.png"
            alt="bath"
          />
          {house.baths}
          ba
          {' '}
          {' '}
          <Test
            src="https://r-place-photos.s3.us-east-2.amazonaws.com/Sqft.png"
            alt="sqft"
          />
          {house.sqfootage.toLocaleString()}
          {' '}
          sqft
        </Description>
        {' '}
        <Item>
          {house.address.toLocaleString()}
        </Item>
        <Item2>
          {house.district}
          , San Francisco
        </Item2>

      </ListingWrap>
    ));

    if (!this.props.show) {
      return null;
    }
    return (
      <Backdrop>
        <ModalStyle>
          <ListingContainer>

            {listItems}

          </ListingContainer>

          <Footer>
            <CloseModal onClick={this.onClose}>
              {' '}
              <svg viewBox="0 0 32 32">
                <path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099" />
              </svg>
              {' '}

            </CloseModal>
          </Footer>
        </ModalStyle>
      </Backdrop>

    );
  }
}

export default Modal;
