import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToWishlist, addToCart } from "../../redux/Shoes/shoeActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ItemContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  border: solid;
  border-color: #b2a59b;
  margin: 5px;
  width: 230px;
  height: 400px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  }
`;

const Image = styled.img`
  height: 200px;
  width: max-content;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const InfoContainer = styled.div`
  font-size: small;
  margin-left: 10px;
`;

const Brand = styled.p`
  font-weight: bold;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Price = styled.p`
  font-weight: bold;
`;

const Delivery = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
  margin-bottom: 10px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProductCard = ({ image, brand, name, price, id, delivery }) => {
  const dispatch = useDispatch();
  const favProducts = useSelector((state) => state.wishlist);

  const handleAddToWishlist = (id) => {
    dispatch(addToWishlist(id));
  };

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const wishlistColor = favProducts.find((product) => product.id === id)
    ? "red"
    : "lightgrey";

  return (
    <ItemContainer>
      <Link to={`/Product/${id}/`}>
        <Image src={image}></Image>
      </Link>
      <InfoContainer>
        <Brand>Brand: {brand}</Brand>
        <Name>Name: {name}</Name>
        <Price>Price: {price}</Price>
        <Delivery>Delivered within {delivery}</Delivery>
        <Link to="/Cart">
          <Button
            onClick={() => {
              handleAddToCart(id);
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Button>
        </Link>
        <Button
          onClick={() => {
            handleAddToWishlist(id);
          }}
        >
          <FavoriteIcon style={{ color: wishlistColor }} />
        </Button>
      </InfoContainer>
    </ItemContainer>
  );
};

export default ProductCard;
