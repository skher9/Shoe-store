import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 550px;
  margin-left: 450px;
  margin-top: 70px;
  width: 500px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const Wrapper = styled.div``;

const Label = styled.label`
  margin-left: 60px;
  font-size: larger;
`;

const Input = styled.input`
  margin-left: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  width: 350px;
  border-radius: 8px;
`;

const Button = styled.button`
  margin-left: 60px;
  margin-top: 25px;
  height: 40px;
  width: 350px;
  border-radius: 8px;
  background-color: #0766ad;
  cursor: pointer;
  font-size: larger;
`;

const Note = styled.p`
  margin-left: 60px;
  margin-top: 30px;
  font-size: larger;
`;

const SignUp = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Sign Up</Title>
        <Wrapper>
          <Label>Name</Label>
          <br />
          <Input type="text" placeholder="name"></Input>
          <br />
          <Label>Email address</Label>
          <br />
          <Input type="email" placeholder="email"></Input>
          <br />
          <Label>Password</Label>
          <br />
          <Input type="password" placeholder="password"></Input>
          <br />
          <Label>Confirm Password</Label>
          <br />
          <Input type="password" placeholder="confirm password"></Input>
          <br />
          <Button>Create new account</Button>
        </Wrapper>
        <Note>
          Already have an account? <Link to="/SignIn">SignIn</Link>
        </Note>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
