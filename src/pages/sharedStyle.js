import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// Shared style

export const colors = {
  primary: "#101010",
  secondary: "#ffffff",
  background: "#f0f0f0",
}


export const GlobalStyle = createGlobalStyle`
  
  html {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

export const MainContainer = styled.div`
  height: auto;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "10em")};
  padding-bottom: 10em;
  padding-left: 15%;
  padding-right: 15%;
  background-color: #f9f9f9;

  /* &.scrolled {
    background-color: white;
  } */

  @media screen and (max-width: 1080px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`;

export const TextBlock = styled.div `

`;

export const ContentsContainer = styled.div`
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
