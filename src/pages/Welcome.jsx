import React, { Component } from "react";
import { Link } from "react-router-dom";

import { GlobalStyle } from "./sharedStyle";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const IntroGlobalStyle = createGlobalStyle`
  
  body {
    box-sizing: content-box;
    overflow: hidden;
    margin: 0;
    background-color: black;

    @media screen and (max-width: 1080px) {
      font-size: 13px;
    }
  }

  p {
    margin: 0
  }
`;

const Border = styled.div`
  position: absolute;
  left: 2em;
  right: 2em;
  top: 2em;
  bottom: 2em;
  background-color: white;

  @media screen and (max-width: 1080px) {
    left: 1em;
    right: 1em;
    top: 1em;
    bottom: 1em;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
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
`;

const StLink = styled(Link)`
  margin: 2vh 2vh;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;

  @media screen and (max-width: 1080px) {
    margin: 3vw;
    font-size: 1rem;
  }
`;

const TitleImg = styled.svg`
  width: 25rem;
  fill: #726d6e;
  stroke-width: 2px;
  stroke: black;

  @media screen and (max-width: 1080px) {
    width: auto;
  }
`;

class Welcome extends Component {
  render() {
    console.log("welcome page rendered");

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IntroGlobalStyle />
          <GlobalStyle />
          <Border>
            <Container>
              <Contents>
                {/* <Title>Pyoeng</Title> */}
                <TitleImg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 125 100"
                >
                  <rect x="5.5" y="33.17" class="st0" width="15" height="60" />
                  <rect
                    x="105.5"
                    y="33.17"
                    class="st0"
                    width="15"
                    height="60"
                  />
                  <circle class="st0" cx="42.06" cy="52.23" r="19.06" />
                  <polygon
                    class="st0"
                    points="78.4,34.07 65.45,34.07 65.44,34.08 65.44,47.05 89.68,71.29 102.64,71.29 102.65,71.28 102.65,58.32 
	"
                  />
                </TitleImg>
                <LinkContainer>
                  <StLink to="/about" id="link-about">
                    About
                  </StLink>
                  <StLink to="/works" id="link-works">
                    Works
                  </StLink>
                </LinkContainer>
              </Contents>
            </Container>
          </Border>
        </motion.div>
      </>
    );
  }
}

export default Welcome;
