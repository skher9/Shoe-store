import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  text-align: center;
`;

const Wrapper = styled.div``;

const Heading = styled.h1``;

const BrandImg = styled.img`
  height: 150px;
  width: 200px;
  margin-left: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Brands = () => {
  const Brand = useSelector((state) => state.brands);

  return (
    <Container>
      <Heading>Brands</Heading>
      <Wrapper>
        {Brand.map((e) => {
          return <BrandImg src={e.src} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Brands;
