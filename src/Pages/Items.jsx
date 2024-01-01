import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const products = useSelector((state) => state.products);

  const [priceFilter, setPriceFilter] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const handlePriceFilter = (value) => {
    setPriceFilter(Number(value));
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category);
      } else {
        return [...prevFilters, category];
      }
    });
  };

  const handleBrandFilter = (brand) => {
    setBrandFilters((prevFilters) => {
      if (prevFilters.includes(brand)) {
        return prevFilters.filter((filter) => filter !== brand);
      } else {
        return [...prevFilters, brand];
      }
    });
  };

  const handleRatingFilter = (value) => {
    setRatingFilter(Number(value));
  };

  const handleSortByPrice = (sortBy) => {
    setSortByPrice(sortBy);
  };

  const clearFilters = () => {
    setPriceFilter(null);
    setCategoryFilters([]);
    setBrandFilters([]);
    setRatingFilter(null);
    setSortByPrice(null);
  };

  const filterData = () => {
    if (
      priceFilter === null &&
      categoryFilters.length === 0 &&
      brandFilters.length === 0 &&
      ratingFilter === null &&
      sortByPrice === null
    ) {
      return products;
    }

    const filteredProducts = products.filter((item) => {
      if (priceFilter !== null && item.price > priceFilter) {
        return false;
      }

      if (
        categoryFilters.length > 0 &&
        !categoryFilters.includes(item.gender)
      ) {
        return false;
      }

      if (brandFilters.length > 0 && !brandFilters.includes(item.brand)) {
        return false;
      }

      if (ratingFilter !== null && item.reviews < ratingFilter) {
        return false;
      }

      return true;
    });

    if (sortByPrice === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortByPrice === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };
  const filteredProducts = filterData();

  return (
    <>
      <Navbar />
      <Container>
        <FilterBar>
          <FilterTop>
            <FilterTitle>Filters</FilterTitle>
            <Clear onClick={clearFilters}>Clear</Clear>
          </FilterTop>
          <Form>
            <FilterTitle>Price</FilterTitle>
            <Input
              type="range"
              value={priceFilter}
              onChange={(e) => handlePriceFilter(Number(e.target.value))}
            />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Categories</FilterTitle>
            <Input
              type="checkbox"
              checked={categoryFilters.includes("Men")}
              onChange={() => handleCategoryFilter("Men")}
            />
            <Label>Men</Label>
            <Br />
            <Input
              type="checkbox"
              checked={categoryFilters.includes("Women")}
              onChange={() => handleCategoryFilter("Women")}
            />
            <Label>Women</Label>
            <Br />
            <Input
              type="checkbox"
              checked={categoryFilters.includes("Kids")}
              onChange={() => handleCategoryFilter("Kids")}
            />
            <Label>Kids</Label>
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Brands</FilterTitle>
            <Input
              type="checkbox"
              checked={brandFilters.includes("Nike")}
              onChange={() => handleBrandFilter("Nike")}
            />
            <Label>Nike</Label>
            <Br />
            <Input
              type="checkbox"
              checked={brandFilters.includes("Adidas")}
              onChange={() => handleBrandFilter("Adidas")}
            />
            <Label>Adidas</Label>
            <Br />
            <Input
              type="checkbox"
              checked={brandFilters.includes("Bata")}
              onChange={() => handleBrandFilter("Bata")}
            />
            <Label>Bata</Label>
            <Br />
            <Input
              type="checkbox"
              checked={brandFilters.includes("Puma")}
              onChange={() => handleBrandFilter("Puma")}
            />
            <Label>Puma</Label>
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Rating</FilterTitle>
            <Input
              type="range"
              value={ratingFilter}
              onChange={(e) => handleRatingFilter(Number(e.target.value))}
            />
            <Br />
            <BreakLine>________________________</BreakLine>
            <FilterTitle>Sort By Price</FilterTitle>
            <Input
              type="radio"
              checked={sortByPrice === "highToLow"}
              onChange={() => handleSortByPrice("highToLow")}
            />
            <Label>High To Low</Label>
            <Br />
            <Input
              type="radio"
              checked={sortByPrice === "lowToHigh"}
              onChange={() => handleSortByPrice("lowToHigh")}
            />
            <Label>Low To High</Label>
            <Br />
          </Form>
        </FilterBar>
        <Wrapper>
          {filteredProducts.map((item) => {
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
