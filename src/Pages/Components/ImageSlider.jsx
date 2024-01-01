import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

const SliderContainer = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ImageDisplay = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b2a59b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const ImageSlider = (props) => {
  console.log(props);

  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + props.images.length) % props.images.length
      );
    }
  };
  return (
    <SliderContainer>
      <ImageContainer>
        <Arrow direction="left" onClick={() => showImage("prev")}>
          <ArrowLeftOutlined />
        </Arrow>
        <ImageDisplay src={props.images[currentIndex]} alt="Product" />
        <Arrow direction="right" onClick={() => showImage("next")}>
          <ArrowRightOutlined />
        </Arrow>
      </ImageContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
