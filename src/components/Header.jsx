import React, { useState } from "react";
import styled from "styled-components";

const HeaderHolder = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  box-sizing: content-box;

  font-size: 2em;
  padding: 4vh 0 4vh 0;

  z-index: 5;
  transition: 0.2s;

  & > .headerText {
    color: white;
    max-width: 35%;
    padding-left: 17%;
    display: block;
    flex: 1;
  }

  @media screen and (max-width: 1080px) {
    & > .headerText {
      max-width: 80%;
      padding-left: 3%;
    }
  }

  &.isScrolled {
    font-size: 1.7em;
    padding: 1.5vh 1vh;
  }
`;

export default function Header(props) {
  const [isScrolled, setScrollActive] = useState(false);
  
  const onScroll = () => {
    if(window.scrollY > 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }
  
  window.addEventListener('scroll', onScroll);

  return (
    <HeaderHolder className={isScrolled ? "isScrolled" : ""}>
      <div className="headerText">{props.nav}</div>
    </HeaderHolder>
  );
}
