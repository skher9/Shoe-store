import React from "react";
import Navbar from "./Navbar";
import TopAdd from "./TopAdd";
import Brands from "./Brands";
import Category from "./Category";
import BottomAdd from "./BottomAdd";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <TopAdd />
      <Brands />
      <Category />
      <BottomAdd />
      <Footer />
    </Container>
  );
};

export default Home;
