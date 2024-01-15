import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  height: 300px;
  border: 2px solid lightgray;
  width: 300px;
  margin-left: 400px;
  border-radius: 30px;
  text-align: center;
  margin-top: 100px;
`;

const Title = styled.p`
  font-size: x-large;
  font-weight: 200;
`;

const Item = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: large;
`;

const ItemText = styled.span`
  margin-left: 20px;
`;

const ItemPrice = styled.span`
  margin-right: 20px;
`;

const Button = styled.button`
  height: 40px;
  font-weight: 200;
  font-size: x-large;
  width: 200px;
  color: white;
  background-color: black;
  border-radius: 10px;
`;

const CheckoutCalc = () => {
  const cart = useSelector((state) => state.cart);

  const Shipping = 299;

  let subTotal = 0;

  cart.map((item) => {
    return (subTotal = subTotal + item.price);
  });

  return (
    <Container>
      <Wrapper>
        <Title>Order Summary</Title>
        <Item>
          <ItemText>SubTotal</ItemText>
          <ItemPrice>₹{subTotal}</ItemPrice>
        </Item>
        <Item>
          <ItemText>EstimatedShipping</ItemText>
          <ItemPrice>₹{Shipping}</ItemPrice>
        </Item>
        <Item>
          <ItemText>Total</ItemText>
          <ItemPrice>₹{subTotal + Shipping}</ItemPrice>
        </Item>
        <Link to="/Checkout">
          <Button>Checkout</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default CheckoutCalc;
