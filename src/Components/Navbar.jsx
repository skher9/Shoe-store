import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: black;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const ExploreContainer = styled.div`
  flex: 1;
`;

const Explore = styled.h1`
  margin-left: 20px;
`;

const LoginContainer = styled.div`
  flex: 1;
`;

const Login = styled.h1`
  margin-left: 20px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const Input = styled.input`
  height: 25px;
  width: 200px;
`;

const Wrap = styled.div`
  display: flex;
  margin-right: 50px;
`;

const Wishlist = styled.div`
  margin-right: 30px;
  cursor: pointer;
`;

const Cart = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <InputContainer>
        <Input type="text" placeholder="What are you looking for?"></Input>
      </InputContainer>
      <TitleContainer>
        <StyledLink to="/">
          <Title>Super Sole.</Title>
        </StyledLink>
      </TitleContainer>
      <ExploreContainer>
        <StyledLink to="/Items">
          <Explore>Explore</Explore>
        </StyledLink>
      </ExploreContainer>
      <LoginContainer>
        <StyledLink to="/SignIn">
          <Login>Login</Login>
        </StyledLink>
      </LoginContainer>
      <Wrap>
        <Wishlist>
          <StyledLink to="/Wishlist">
            <FavoriteBorderOutlinedIcon />
          </StyledLink>
        </Wishlist>
        <Cart>
          <StyledLink to="/Cart">
            <ShoppingCartOutlinedIcon />
          </StyledLink>
        </Cart>
      </Wrap>
    </Container>
  );
};

export default Navbar;
