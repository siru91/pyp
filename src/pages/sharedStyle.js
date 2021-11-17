import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// Shared style

export const colors = {
  primary: "#101010",
  secondary: "#ffffff",
  background: "#f9f9f9",
};

export const GlobalStyle = createGlobalStyle`
  
  html {
    background-color: ${colors.background};

    margin: 0;
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
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

export const HeadContainer = styled.div`
  height: 100vh;
  padding-top: 10vh;
  overflow: hidden;
`;

export const HeadContainerImg = styled.div`
  height: 100%;
  background: no-repeat center/cover;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageUrl});
`;

export const HeadContainerVid = styled.video`
  width: auto;
  height: auto;
  min-height: 100%;

  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
`;

// export const HeaderTextHolder = styled.div`
//   position: absolute;
//   width: auto;
//   bottom: 0;
//   background-color: #262626;
//   text-align: left;
//   display: block;
//   padding: 5vh 10vh 5vh 8vh;
//   color: white;

//   & > .title {
//     font-size: 3rem;
//     font-weight: 700;
//     margin-bottom: 10vh;
//     line-height: 6.5rem;

//     @media screen and (max-width: 1080px) {
//       font-size: 2rem;
//       line-height: 3.5rem;
//       top: 30%;
//     }
//   }

//   & > .subtitle {
//     font-size: 1.5rem;
//     font-weight: 400;
//   }

//   & > .desc {
//     font-size: 1.5rem;
//     font-weight: 400;

//     @media screen and (max-width: 1080px) {
//       bottom: 0;
//       margin-left: 0%;
//     }
//   }
// `;

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  padding-bottom: 5rem;
  padding-top: ${(props) => props.paddingToTop || 0};

  /* &.scrolled {
    background-color: white;
  } */

  & > .subContainer {
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 1080px) {
      padding-left: 3%;
      padding-right: 3%;
    }
  }

  & > .itemList {
    max-width: 80rem;
    margin: 0 auto;
  }
`;

export const ColumnTitle = styled.div`
  position: relative;
  left: -1%;
  font-size: 1.5rem;
  display: inline-block;
  width: auto;
  padding: 0 1em 0 0.4em;
  height: 2em;
  line-height: 1.8em;
  margin-bottom: 1em;
  margin-top: ${(props) => (props.first ? "0em" : "4em")};
  background-color: black;
  color: white;
`;

export const HolderTitle = styled.span`
  font-weight: 600;
`;

export const HolderDesc = styled.span`
  white-space: pre-line;
  margin-left: 0px;
  margin-top: 5px;
`;

export const TextHolder = styled.div`
  width: auto;
  display: grid;
  font-size: 1.1rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1rem;
  margin-top: ${(props) => (props.first ? "0rem" : "10rem")};

  & > .title {
    display: flex;
    justify-content: left;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;

    & > .text {
      transform: translate(8%, -10%);
    }

    & > .bar_start {
      background-color: black;
      width: 5px;
      height: 2rem;
      display: block;
    }
    & > .bar_end {
      background-color: null;
      width: 5px;
      height: 2rem;
      display: block;
    }
  }

  & > .desc {
    grid-column-start: 1;
    grid-column-end: 4;
    line-height: 2rem;
  }

  & > .items {
    max-width: 100%;
    border: black solid 1px;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

export const Holder__image = styled.img`
  object-position: ${(props) => props.objPos || null};
  grid-column-start: ${(props) => props.columnStart || 1};
  grid-column-end: ${(props) => props.columnEnd || 7};
`;

export const Holder__video = styled.video`
  object-position: ${(props) => props.objPos || null};
  grid-column-start: ${(props) => props.columnStart || 1};
  grid-column-end: ${(props) => props.columnEnd || 7};
`;

export const ImageHolder = styled.div`
  width: 100%;
  box-sizing: content-box;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.15rem;
  margin-bottom: 14rem;

  ${Holder__image} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${Holder__video} {
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TechContainer = styled.div`
  z-index: 2;
  background-color: #b7b7b740;
  backdrop-filter: blur(5px);
  padding: 5rem 15% 7rem 15%;
`;

export const TechHolder = styled.div`
  width: auto;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);

  grid-auto-flow: column;
  row-gap: 5rem;

  @media screen and (max-width: 1080px) {
  }
  & > .techHolder__title {
    font-size: 1.6em;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;

    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  /* & > .techHolder__desc {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
  } */

  & > .techHolder__chart {
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const TechContainer12 = styled.div`
  width: 20%;
  height: 10em;
  background-color: #f5f5f5;
  border-radius: 15px;

  .tech-tmb {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    width: 5em;
    height: 5em;
    background-color: #757575;
    border-radius: 5%;
  }

  .tech-title {
    position: relative;
    text-align: center;
    top: 13%;
  }
`;

export const BackBtn = styled.div`
  position: absolute;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  top: 25%;
  left: 15%;
`;

// img tag for svg
export const SvgImg = styled.object`
  position: absolute;

  top: ${(props) => props.top};
  left: ${(props) => props.left || null};
  right: ${(props) => props.right || null};
  width: 35%;
  filter: opacity(0.2);
`;

export const TextBlock = styled.div``;

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
