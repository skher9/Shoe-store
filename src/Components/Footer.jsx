import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  height: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #d4e2d4;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const First = styled.div`
  flex: 1;
  margin-left: 100px;
`;

const Second = styled.div`
  flex: 1;
  justify-content: center;
`;

const Note = styled.p`
  font-size: larger;
  font-weight: 150;
`;

const Third = styled.div`
  flex: 1;
  justify-content: center;
`;

const Heading = styled.h1``;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Twitter = styled.div`
  margin-left: 30px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(2.2);
  }
`;

const LinkedIn = styled.div`
  margin-left: 30px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(2.2);
  }
`;

const GitHub = styled.div`
  margin-left: 30px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(2.2);
  }
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  margin-top: 5px;
  cursor: pointer;
`;

const Link = styled.a``;

const Author = styled.p`
  margin-left: 300px;
  padding: 10px;
  font-size: larger;
  font-weight: 200;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <Heading>Connect with me.</Heading>
          <Icons>
            <Twitter>
              <Link href="https://twitter.com/shravani_k89430">
                <TwitterIcon />
              </Link>
            </Twitter>
            <LinkedIn>
              <Link href="https://www.linkedin.com/in/shravani-kher-0875281b6/">
                <LinkedInIcon />
              </Link>
            </LinkedIn>
            <GitHub>
              <Link href="https://github.com/skher9">
                <GitHubIcon />
              </Link>
            </GitHub>
          </Icons>
        </First>
        <Second>
          <Heading>Super Sole.</Heading>
          <Note>The Essence Of Perfect Shoes.</Note>
        </Second>
        <Third>
          <Heading>Quick links</Heading>
          <UL>
            <LI>Home.</LI>
            <LI>Explore.</LI>
            <LI>Cart.</LI>
            <LI>Wishlist.</LI>
          </UL>
        </Third>
      </Wrapper>
      <Author>
        Copyright ©2023 All rights reserved | This template is made by Shravani
        Kher.
      </Author>
    </Container>
  );
};

export default Footer;
