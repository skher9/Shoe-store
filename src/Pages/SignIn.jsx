import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  margin-left: 450px;
  margin-top: 70px;
  border: solid;
  width: 500px;
  border-radius: 10px;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const Label = styled.label`
  margin-left: 50px;
  font-size: larger;
`;

const Input = styled.input`
  margin-left: 50px;
  margin-top: 10px;
  height: 30px;
  width: 400px;
  border-radius: 8px;
`;

const Button = styled.button`
  margin-top: 25px;
  margin-left: 50px;
  height: 30px;
  width: 400px;
  background-color: #0766ad;
  cursor: pointer;
  border-radius: 8px;
  font-size: larger;
  font-weight: 200;
`;

const InputDiv = styled.div``;

const SubmitDiv = styled.div``;

const Note = styled.p`
  margin-left: 50px;
  font-size: larger;
`;

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Sign In</Title>
        <Wrapper>
          <InputDiv>
            <Label>Email Address:</Label>
            <br />
            <Input type="email" placeholder="email"></Input>
            <br />
            <br />
            <Label>Password:</Label>
            <br />
            <Input type="password" placeholder="password"></Input>
          </InputDiv>
          <SubmitDiv>
            <Button>Login</Button>
            <br />
            <Button>Login as guest</Button>
          </SubmitDiv>
        </Wrapper>
        <Note>Don't have an account? SignUp</Note>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
