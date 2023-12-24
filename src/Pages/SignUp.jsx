import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  margin-left: 450px;
  margin-top: 70px;
  border: solid;
  width: 450px;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div``;

const Label = styled.label`
  margin-left: 50px;
  font-size: larger;
`;

const Input = styled.input`
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  width: 350px;
  border-radius: 8px;
`;

const Button = styled.button`
  margin-left: 50px;
  margin-top: 15px;
  height: 40px;
  width: 350px;
  border-radius: 8px;
  background-color: #0766ad;
  cursor: pointer;
  font-size: larger;
`;

const Note = styled.p`
  margin-left: 50px;
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
        <Note>Already have an account? SignIn</Note>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
