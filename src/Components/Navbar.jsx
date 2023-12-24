import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
`;

const Title = styled.h1``;
const Explore = styled.h1`
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Title>Shoe-store</Title>
      </Link>
      <Link to="/Items">
        <Explore>Explore</Explore>
      </Link>
    </Container>
  );
};

export default Navbar;
