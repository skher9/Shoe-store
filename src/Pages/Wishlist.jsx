import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moveToCart, removeFromWishlist } from "../redux/Shoes/shoeActions";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div``;

const Wrapper = styled.div`
  min-height: 450px;
  margin-top: 20px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;

const ItemContainer = styled.div`
  position: relative;
  border-radius: 15px;
  border: solid;
  border-color: #b2a59b;
  margin: 5px;
  width: 230px;
`;

const Image = styled.img`
  height: 200px;
  width: max-content;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const InfoContainer = styled.div`
  font-size: small;
  margin-left: 10px;
`;

const Brand = styled.p`
  font-weight: bold;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Price = styled.p`
  font-weight: bold;
`;

const Delivery = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
  margin-left: 30px;
  margin-bottom: 10px;
  background-color: transparent;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

const Cross = styled.button`
  position: absolute;
  top: 2px;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const EmptyContainer = styled.div`
  height: 450px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const EmptyImage = styled.img`
  height: 300px;
`;

const EmptyText = styled.p`
  font-weight: bold;
`;

const EmptyNote = styled.p``;

const Explore = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 15px;
  font-size: larger;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background-color: black;
  width: 200px;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Wishlist = () => {
  const favProducts = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleMoveToCart = (productId) => {
    dispatch(moveToCart(productId));
  };

  const handleRemoveFromWishlist = (productToRemove) => {
    dispatch(removeFromWishlist(productToRemove));
  };

  return (
    <Container>
      <Navbar />
      <Title>YOUR WISHLIST</Title>
      {favProducts.length === 0 ? (
        <EmptyContainer>
          <EmptyImage src="https://img.freepik.com/premium-vector/cute-character-fabric-bag-with-sad-emotions-depressed-face-down-eyes-arms-legs-shopper-with-melancholy-face-ecological-alternative-plastic-bag-vector-flat-illustration_427567-4289.jpg" />
          <EmptyText>Hey, it feels so light!</EmptyText>
          <EmptyNote>
            There is nothing in your Wishlist. Let's add some items.
          </EmptyNote>
          <Link to="/Items">
            <Explore>Start Shopping!!</Explore>
          </Link>
        </EmptyContainer>
      ) : (
        <>
          <Top>
            <Link to="/Items">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Wishlist({favProducts.length})</TopText>
            </TopTexts>
            <Link to="/Cart">
              <TopButton type="filled">SHOPPING CART</TopButton>
            </Link>
          </Top>
          <Wrapper>
            {favProducts.map((item) => {
              return (
                <ItemContainer>
                  <Image src={item.images[0]}></Image>
                  <Cross
                    onClick={() => {
                      handleRemoveFromWishlist(item.id);
                    }}
                  >
                    <CloseIcon />
                  </Cross>
                  <InfoContainer>
                    <Brand>Brand: {item.brand}</Brand>
                    <Name>Name: {item.name}</Name>
                    <Price>Price: {item.price}</Price>
                    <Delivery>Delivered within {item.delivery}</Delivery>
                    <Link to="/Cart">
                      <Button
                        onClick={() => {
                          handleMoveToCart(item.id);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Link>
                  </InfoContainer>
                </ItemContainer>
              );
            })}
          </Wrapper>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Wishlist;
