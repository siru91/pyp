import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// Shared style

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
    text-underline-position: unset;
  }

  a:hover {
    color: rgb(80, 80, 80);
  }
`;

export const MainContainer = styled.div `
  height: auto;
  padding-top: 10em;
  padding-left: 17%;
  padding-right: 17%;
  background-color: white;

  @media screen and (max-width: 1080px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const ContentsContainer = styled.div `
  height: auto;
  padding-top: 10em;
  padding-left: 17%;
  padding-right: 17%;
  background-color: gray;

  @media screen and (max-width: 1080px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;