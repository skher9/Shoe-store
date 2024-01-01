import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  height: 400px;
  width: 500px;
  margin-top: 70px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  height: 40px;
  width: 160px;
  margin-left: 30px;
  background-color: transparent;
  border-radius: 4px;
  font-size: large;
  cursor: pointer;
`;

const Category = () => {
  const category = useSelector((state) => state.category);

  return (
    <Container>
      <Title>Shop By Category</Title>
      <Wrapper>
        {category.map((e) => {
          return (
            <CategoryContainer>
              <StyledLink to="/Items">
                <Image src={e.src} />
                <Button>Shop for {e.title}</Button>
              </StyledLink>
            </CategoryContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Category;
