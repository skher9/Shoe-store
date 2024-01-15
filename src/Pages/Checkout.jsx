import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Container = styled.div`
  height: 400px;
  text-align: center;
`;

const Image = styled.img`
  height: 270px;
`;

const Note = styled.p`
  font-size: x-large;
  margin-top: 40px;
`;

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Image src="https://media.tenor.com/j0gsiJTJPxAAAAAi/tkthao219-bubududu.gif" />
        <Note>Your Order has been Placed Successfully!!!....🎉🎉✨✨</Note>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
