import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
  
  body {
    box-sizing: content-box;
    overflow: hidden;
    margin: 0;
    background-color: black;

    @media screen and (max-width: 1080px) {
      font-size: 15px;
    }
  }

  a {
    text-decoration: none;
    color: teal;
  }

  a:visited {
    color: teal;
    text-underline-position: unset;
  }

  a:hover {
    color: rgb(255, 196, 0);
  }

  p {
    margin: 0
  }
`;

const Body = styled.body`
  background-color: black;
`;
const Border = styled.div`
  position: absolute;
  left: 4em;
  right: 4em;
  top: 4em;
  bottom: 4em;
  background-color: white;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
`;

const Title = styled.div`
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 1vh;
  font-size: 5em;
  color: black;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Contents = styled.div`
  position: relative;
  left: -50%;
`;

const StLink = styled(Link)`
  margin: 2vh 2vh;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
`;

class Welcome extends Component {
  render() {
    console.log("welcome page rendered");

    return (
      <Body>
        <GlobalStyle />
        <Border>
          <Container>
            <Contents>
              <Title>Pyoeng</Title>
              <LinkContainer>
                <StLink to="./About" id="link-about">
                  About
                </StLink>
                <StLink to="./Works" id="link-works">
                  Works
                </StLink>
              </LinkContainer>
            </Contents>
          </Container>
        </Border>
      </Body>
    );
  }
}

export default Welcome;
