import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 100%;
  background-image: url("https://supersole.netlify.app/static/media/poster3.86f4af93766946aa97f5.png");
  background-repeat: no-repeat;
  background-size: 100% 100%; /* Adjust the width and height as a percentage */
  background-position: center;
`;

const Wrapper = styled.div``;

const TopAdd = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default TopAdd;
