import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Components/ProductCard";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;

const FilterBar = styled.div`
  width: 40vh;
  margin-right: 30px;
  border-right: solid;
`;

const FilterTop = styled.div`
  display: flex;
  margin-right: 50px;
  margin-left: 10px;
  align-items: center;
`;

const Clear = styled.button`
  margin-left: 70px;
  height: 30px;
  width: 70px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 30vh;
  margin-right: 50px;
  margin-left: 10px;
`;

const BreakLine = styled.p``;

const Br = styled.br``;

const Label = styled.label``;

const Input = styled.input``;

const FilterTitle = styled.p`
  font-size: large;
`;

const Items = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <>
      <Navbar />
      <Container>
        <FilterBar>
          <FilterTop>
            <FilterTitle>Filters</FilterTitle>
            <Clear>Clear</Clear>
          </FilterTop>
          <Form>
            <FilterTitle>Price</FilterTitle>
            <Input type="range"></Input>
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Categories</FilterTitle>
            <Input type="checkbox"></Input>
            <Label>Men</Label>
            <Br />
            <Input type="checkbox"></Input>
            <Label>Women</Label>
            <Br />
            <Input type="checkbox"></Input>
            <Label>Kids</Label>
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Brands</FilterTitle>
            <Input type="checkbox"></Input>
            <Label>Nike</Label>
            <Br />
            <Input type="checkbox"></Input>
            <Label>Adidas</Label>
            <Br />
            <Input type="checkbox"></Input>
            <Label>Bata</Label>
            <Br />
            <Input type="checkbox"></Input>
            <Label>Puma</Label>
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Rating</FilterTitle>
            <Input type="range"></Input>
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Sort By Price</FilterTitle>
            <Input type="radio"></Input>
            <Label>High To Low</Label>
            <Br />
            <Input type="radio"></Input>
            <Label>Low To High</Label>
            <Br />
          </Form>
        </FilterBar>
        <Wrapper>
          {products.map((item) => {
            const { brand, name, images, id, price, delivery } = item;
            return (
              <ProductCard
                image={images[0]}
                name={name}
                brand={brand}
                price={price}
                id={id}
                delivery={delivery}
              />
            );
          })}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Items;
