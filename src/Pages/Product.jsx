import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToWishlist, addToCart } from "../redux/Shoes/shoeActions";
import ImageSlider from "./Components/ImageSlider";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 40%;
`;

const InfoContainer = styled.div`
  width: 50%;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
`;

const BrandName = styled.p`
  font-size: x-large;
`;

const ProductName = styled.h2``;

const Gender = styled.p`
  font-size: large;
`;

const ProductPrice = styled.p`
  font-size: x-large;
  color: green;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  font-size: larger;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ProductDelivery = styled.p``;

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const handleAddToWishlist = (productId) => {
    console.log(productId);
    dispatch(addToWishlist(productId));
  };

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <>
      <Navbar />
      <Container>
        {products.map((item) => {
          if (item.id === id) {
            return (
              <Wrapper>
                <ImageContainer>
                  <ImageSlider images={item.images} />
                </ImageContainer>
                <InfoContainer>
                  <ProductName>Name : {item.name}</ProductName>
                  <BrandName>Brand : {item.brand}</BrandName>
                  <Gender>For : {item.gender}</Gender>
                  <ProductPrice> ₹{item.price}</ProductPrice>
                  <ProductDelivery>Delivery : {item.delivery}</ProductDelivery>
                  <Link to="/Cart">
                    <Button
                      onClick={() => {
                        handleAddToCart(item.id);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Link>

                  <Button
                    onClick={() => {
                      handleAddToWishlist(item.id);
                    }}
                  >
                    Add to Wishlist
                  </Button>
                </InfoContainer>
              </Wrapper>
            );
          }
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
