import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/shoe/shoeActions";

const Container = styled.div``;

const Wrapper = styled.div``;

const FilterBar = styled.div``;

const UL = styled.li``;

const LI = styled.li``;

const Items = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);

  return (
    <>
      <Navbar />
      <Container>
        <FilterBar></FilterBar>
        <Wrapper>
          <UL>
            {shoes.map((shoe) => (
              <LI key={shoe.id}>
                {shoe.name} - ${shoe.price}
                <button onClick={() => dispatch(addToCart(shoe))}>
                  Add to Cart
                </button>
              </LI>
            ))}
          </UL>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Items;
