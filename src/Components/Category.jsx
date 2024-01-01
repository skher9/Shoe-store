import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  text-align: center;
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
    transform: scale(1.1); /* Scale the image slightly on hover */
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
              <Image src={e.src} />
              <Button>Shop for {e.title}</Button>
            </CategoryContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Category;
