import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { moveToWishlist, removeFromCart } from "../redux/Shoes/shoeActions";
import { Link } from "react-router-dom";
import CheckoutCalc from "./Components/CheckoutCalc";

const Container = styled.div``;

const Wrapper = styled.div`
  min-height: 450px;
  margin-top: 20px;
  overflow: auto;
`;

const ItemContainer = styled.div`
  position: relative;
  align-items: center;
  border-radius: 15px;
  border: solid;
  border-color: #b2a59b;
  margin: 5px;
  width: 600px;
  display: flex;
`;

const Image = styled.img`
  height: 200px;
  width: max-content;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const InfoContainer = styled.div`
  font-size: small;
  margin-left: 50px;
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
  margin-top: 20px;
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

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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

const WrapperContainer = styled.div`
  display: flex;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productToRemove) => {
    dispatch(removeFromCart(productToRemove));
  };

  const handleMoveToWishlist = (productId) => {
    dispatch(moveToWishlist(productId));
  };

  return (
    <Container>
      <Navbar />
      <Title>YOUR BAG</Title>
      {cart.length === 0 ? (
        <EmptyContainer>
          <EmptyImage src="https://previews.123rf.com/images/kattpolyakova/kattpolyakova2206/kattpolyakova220600021/187388900-cute-character-fabric-bag-with-crying-and-tears-emotion-sad-face-depressive-eyes-arms-and-legs.jpg" />
          <EmptyText>Hey, it feels so light!</EmptyText>
          <EmptyNote>
            There is nothing in your Cart. Let's add some items.
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
              <TopText>Shopping Bag({cart.length})</TopText>
            </TopTexts>
            <Link to="/Wishlist">
              <TopButton type="filled">WISHLIST</TopButton>
            </Link>
          </Top>
          <WrapperContainer>
            <Wrapper>
              {cart.map((item) => {
                return (
                  <ItemContainer>
                    <Image src={item.images[0]}></Image>
                    <Cross
                      onClick={() => {
                        handleRemoveFromCart(item.id);
                      }}
                    >
                      <CloseIcon />
                    </Cross>
                    <InfoContainer>
                      <Brand>Brand: {item.brand}</Brand>
                      <Name>Name: {item.name}</Name>
                      <Price>Price: {item.price}</Price>
                      <Delivery>Delivered within {item.delivery}</Delivery>
                      <Button
                        onClick={() => {
                          handleMoveToWishlist(item.id);
                        }}
                      >
                        Move to Wishlist
                      </Button>
                    </InfoContainer>
                  </ItemContainer>
                );
              })}
            </Wrapper>
            <CheckoutCalc />
          </WrapperContainer>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default Cart;
